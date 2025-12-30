import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Download, FileText, BookOpen, Lightbulb, ClipboardList, Users, FileDown } from "lucide-react";
import { jsPDF } from "jspdf";

interface PortfolioItem {
  id: string;
  type: "Reflection" | "Sermon Outline" | "Teaching Plan" | "Practicum Log" | "Mentoring Notes";
  title: string;
  content: string;
  date: string;
  tags?: string[];
}

const ITEM_TYPES = [
  { value: "Reflection", label: "Reflection", icon: Lightbulb },
  { value: "Sermon Outline", label: "Sermon Outline", icon: FileText },
  { value: "Teaching Plan", label: "Teaching Plan", icon: BookOpen },
  { value: "Practicum Log", label: "Practicum Log", icon: ClipboardList },
  { value: "Mentoring Notes", label: "Mentoring Notes", icon: Users }
] as const;

const TYPE_COLORS: Record<string, string> = {
  "Reflection": "bg-blue-100 text-blue-800 border-blue-200",
  "Sermon Outline": "bg-purple-100 text-purple-800 border-purple-200",
  "Teaching Plan": "bg-green-100 text-green-800 border-green-200",
  "Practicum Log": "bg-orange-100 text-orange-800 border-orange-200",
  "Mentoring Notes": "bg-pink-100 text-pink-800 border-pink-200"
};

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState<Partial<PortfolioItem>>({
    type: "Reflection",
    title: "",
    content: "",
    tags: []
  });

  useEffect(() => {
    const saved = localStorage.getItem("axiom_portfolio_v1");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse portfolio data", e);
      }
    }
  }, []);

  const saveItems = (updatedItems: PortfolioItem[]) => {
    setItems(updatedItems);
    localStorage.setItem("axiom_portfolio_v1", JSON.stringify(updatedItems));
  };

  const handleAddItem = () => {
    if (!newItem.title || !newItem.content || !newItem.type) {
      toast.error("Please fill in all required fields");
      return;
    }

    const item: PortfolioItem = {
      id: Date.now().toString(),
      type: newItem.type as PortfolioItem["type"],
      title: newItem.title,
      content: newItem.content,
      date: new Date().toISOString(),
      tags: newItem.tags || []
    };

    saveItems([...items, item]);
    setIsDialogOpen(false);
    setNewItem({ type: "Reflection", title: "", content: "", tags: [] });
    toast.success("Portfolio item added successfully");
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(items, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `axiom-portfolio-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Portfolio exported as JSON");
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPos = margin;

    // Title
    doc.setFontSize(20);
    doc.text("Axiom Ministry Studies Portfolio", margin, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, yPos);
    yPos += 15;

    // Items
    items.forEach((item, index) => {
      // Check if we need a new page
      if (yPos > pageHeight - 40) {
        doc.addPage();
        yPos = margin;
      }

      // Item header
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 1}. ${item.title}`, margin, yPos);
      yPos += 7;

      // Type and date
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`Type: ${item.type}`, margin, yPos);
      yPos += 5;
      doc.text(`Date: ${new Date(item.date).toLocaleDateString()}`, margin, yPos);
      yPos += 8;

      // Content
      doc.setFontSize(10);
      const lines = doc.splitTextToSize(item.content, maxWidth);
      lines.forEach((line: string) => {
        if (yPos > pageHeight - 20) {
          doc.addPage();
          yPos = margin;
        }
        doc.text(line, margin, yPos);
        yPos += 5;
      });

      yPos += 10;
    });

    doc.save(`axiom-portfolio-${new Date().toISOString().split("T")[0]}.pdf`);
    toast.success("Portfolio exported as PDF");
  };

  const getItemIcon = (type: string) => {
    const itemType = ITEM_TYPES.find(t => t.value === type);
    return itemType?.icon || FileText;
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, PortfolioItem[]>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-4">Ministry Portfolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Document your ministry formation journey with reflections, sermon outlines, teaching plans,
              and practical ministry experiences. Build evidence of growth and learning.
            </p>
          </div>
          <div className="flex gap-3">
            <Button onClick={handleExportPDF} variant="default" disabled={items.length === 0}>
              <FileDown className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
            <Button onClick={handleExportJSON} variant="outline" disabled={items.length === 0}>
              <Download className="w-4 h-4 mr-2" />
              Export JSON
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Item
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add Portfolio Item</DialogTitle>
                  <DialogDescription>
                    Create a new entry to document your ministry formation and learning.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="type">Item Type *</Label>
                    <Select
                      value={newItem.type}
                      onValueChange={(value) => setNewItem({ ...newItem, type: value as PortfolioItem["type"] })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ITEM_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={newItem.title}
                      onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                      placeholder="Give this entry a descriptive title"
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      value={newItem.content}
                      onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                      placeholder="Write your reflection, outline, plan, or notes here..."
                      rows={12}
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddItem}>
                      Add to Portfolio
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {items.length === 0 ? (
          <Card className="shadow-lg border-border/50">
            <CardContent className="py-16 text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="mb-2">Your Portfolio is Empty</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Start documenting your ministry formation journey by adding your first portfolio item.
              </p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Item
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {ITEM_TYPES.map((itemType) => {
              const typeItems = groupedItems[itemType.value] || [];
              if (typeItems.length === 0) return null;

              const Icon = itemType.icon;

              return (
                <div key={itemType.value}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl">{itemType.label}</h3>
                    <Badge variant="secondary">{typeItems.length}</Badge>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {typeItems.map((item) => (
                      <Card key={item.id} className="shadow-md border-border/50 hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <Badge className={TYPE_COLORS[item.type]} variant="outline">
                              {item.type}
                            </Badge>
                          </div>
                          <CardDescription>
                            {new Date(item.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-4">
                            {item.content}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
