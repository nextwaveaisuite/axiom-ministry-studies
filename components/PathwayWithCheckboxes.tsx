import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { toast } from "sonner";

interface PathwayModule {
  number: number;
  title: string;
  description: string;
  scripture: string;
  topics: string[];
}

interface PathwayWithCheckboxesProps {
  pathwayId: string;
  pathwayTitle: string;
  pathwayDescription: string;
  modules: PathwayModule[];
  children?: React.ReactNode;
}

export default function PathwayWithCheckboxes({
  pathwayId,
  pathwayTitle,
  pathwayDescription,
  modules,
  children
}: PathwayWithCheckboxesProps) {
  const [completedModules, setCompletedModules] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const progressKey = "axiom-pathway-progress";
    const saved = localStorage.getItem(progressKey);
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        setCompletedModules(progress[pathwayId] || {});
      } catch (e) {
        setCompletedModules({});
      }
    }
  }, [pathwayId]);

  const toggleModuleCompletion = (moduleNumber: number) => {
    const progressKey = "axiom-pathway-progress";
    const saved = localStorage.getItem(progressKey);
    let progress: any = {};
    
    if (saved) {
      try {
        progress = JSON.parse(saved);
      } catch (e) {
        progress = {};
      }
    }

    if (!progress[pathwayId]) {
      progress[pathwayId] = {};
    }

    progress[pathwayId][moduleNumber] = !completedModules[moduleNumber];
    localStorage.setItem(progressKey, JSON.stringify(progress));
    setCompletedModules(progress[pathwayId]);
  };

  const isPathwayComplete = () => {
    return modules.every(module => completedModules[module.number]);
  };

  const generateCertificate = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Border
    doc.setLineWidth(2);
    doc.setDrawColor(180, 120, 60);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
    doc.setLineWidth(0.5);
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

    // Title
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text('Certificate of Completion', pageWidth / 2, 40, { align: 'center' });

    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text('Axiom Ministry Studies', pageWidth / 2, 55, { align: 'center' });

    // Get learner name
    let learnerName = 'Ministry Student';
    const intakeData = localStorage.getItem('axiom_ministry_intake_v1');
    if (intakeData) {
      try {
        const intake = JSON.parse(intakeData);
        learnerName = intake.name || learnerName;
      } catch (e) {
        // Use default
      }
    }

    doc.setFontSize(14);
    doc.text('This certifies that', pageWidth / 2, 75, { align: 'center' });

    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(learnerName, pageWidth / 2, 90, { align: 'center' });

    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('has successfully completed the', pageWidth / 2, 105, { align: 'center' });

    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(pathwayTitle, pageWidth / 2, 120, { align: 'center' });

    // Modules
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('Completed Modules:', pageWidth / 2, 135, { align: 'center' });

    let yPos = 142;
    modules.forEach((module) => {
      doc.setFontSize(9);
      doc.text(`Module ${module.number}: ${module.title}`, pageWidth / 2, yPos, { align: 'center' });
      yPos += 5;
    });

    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth / 2, yPos + 10, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('"For the equipping of the saints for the work of ministry, for the edifying of the body of Christ"', pageWidth / 2, pageHeight - 25, { align: 'center' });
    doc.text('- Ephesians 4:12', pageWidth / 2, pageHeight - 20, { align: 'center' });

    doc.save(`axiom-certificate-${pathwayId}-${new Date().toISOString().split('T')[0]}.pdf`);
    toast.success('Certificate downloaded successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-5xl">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <Link href="/ministry">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Ministry Overview
              </Button>
            </Link>
            {isPathwayComplete() && (
              <Button onClick={generateCertificate} className="bg-green-600 hover:bg-green-700">
                <Shield className="mr-2 w-4 h-4" />
                Download Certificate
              </Button>
            )}
          </div>

          <Card className="shadow-lg border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-3xl">{pathwayTitle}</CardTitle>
              <CardDescription className="text-base mt-2">
                {pathwayDescription}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {children}

        <div className="mb-12">
          <h2 className="mb-6">Pathway Modules</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module) => (
              <AccordionItem
                key={module.number}
                value={`module-${module.number}`}
                className="border border-border/50 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={completedModules[module.number] || false}
                        onCheckedChange={() => toggleModuleCompletion(module.number)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary">{module.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold mb-1">{module.title}</h3>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4 pl-14">
                    <div className="bg-accent/20 p-4 rounded-lg border border-border/30">
                      <p className="text-sm font-medium text-primary mb-1">Key Scripture</p>
                      <p className="text-sm text-foreground/90">{module.scripture}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Topics Covered:</p>
                      <ul className="space-y-1">
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
