import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, UserPlus, Share2, Download, Send } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function MentorConnection() {
  const { isAuthenticated } = useAuth();
  const [mentorEmail, setMentorEmail] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [requestPathway, setRequestPathway] = useState("mens");
  const [requestMessage, setRequestMessage] = useState("");
  
  const { data: myRequests = [] } = trpc.mentors.getMyRequests.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  
  const requestMentorMutation = trpc.mentors.requestMentor.useMutation({
    onSuccess: () => {
      setRequestMessage("");
      toast.success("Mentor request submitted successfully!");
    },
  });
  
  const handleSubmitRequest = () => {
    if (!requestMessage) {
      toast.error("Please provide a message");
      return;
    }
    requestMentorMutation.mutate({ pathway: requestPathway, message: requestMessage });
  };

  const generateProgressReport = () => {
    // Get all progress data
    const progressKey = "axiom-pathway-progress";
    const intakeKey = "axiom-intake-data";
    const portfolioKey = "axiom-portfolio-items";

    const progress = JSON.parse(localStorage.getItem(progressKey) || "{}");
    const intake = JSON.parse(localStorage.getItem(intakeKey) || "{}");
    const portfolio = JSON.parse(localStorage.getItem(portfolioKey) || "[]");

    // Calculate completion statistics
    const pathways = ["mens", "womens", "youth", "teaching"];
    const stats = pathways.map(pathway => {
      const completed = Object.values(progress[pathway] || {}).filter(Boolean).length;
      const total = 6;
      const percentage = Math.round((completed / total) * 100);
      return { pathway, completed, total, percentage };
    });

    return {
      learnerInfo: intake,
      pathwayProgress: stats,
      portfolioCount: portfolio.length,
      generatedAt: new Date().toISOString(),
    };
  };

  const handleShareProgress = () => {
    const report = generateProgressReport();
    const reportText = `
AXIOM MINISTRY STUDIES - PROGRESS REPORT
Generated: ${new Date(report.generatedAt).toLocaleString()}

LEARNER INFORMATION:
Name: ${report.learnerInfo.name || "Not provided"}
Church/Organization: ${report.learnerInfo.church || "Not provided"}
Role: ${report.learnerInfo.role || "Not provided"}

PATHWAY PROGRESS:
${report.pathwayProgress.map(p => 
  `- ${p.pathway.charAt(0).toUpperCase() + p.pathway.slice(1)} Ministry: ${p.completed}/${p.total} modules (${p.percentage}%)`
).join('\n')}

PORTFOLIO ITEMS: ${report.portfolioCount}

This learner is progressing through the Axiom Ministry Studies platform, equipping themselves for ministry according to Ephesians 4:11-13.

View full portfolio and progress details by requesting access from the learner.
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent("Axiom Ministry Studies - Progress Update");
    const body = encodeURIComponent(reportText + "\n\n" + (message || ""));
    const mailtoLink = `mailto:${mentorEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    toast.success("Opening email client to share progress");
  };

  const handleDownloadReport = () => {
    const report = generateProgressReport();
    const reportJSON = JSON.stringify(report, null, 2);
    const blob = new Blob([reportJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `axiom-progress-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Progress report downloaded");
  };

  const handleSaveMentor = () => {
    if (!mentorName || !mentorEmail) {
      toast.error("Please provide both mentor name and email");
      return;
    }

    const mentorData = {
      name: mentorName,
      email: mentorEmail,
      addedAt: new Date().toISOString(),
    };

    localStorage.setItem("axiom-mentor-info", JSON.stringify(mentorData));
    toast.success("Mentor information saved");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-3">
            Mentor Connection
          </h1>
          <p className="text-lg text-muted-foreground">
            Share your progress and portfolio with your mentor or accountability partner
          </p>
        </div>

        <div className="space-y-6">
          {/* Request a Mentor Card */}
          {isAuthenticated && (
            <Card className="shadow-lg border-primary/30 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  <div>
                    <CardTitle>Request a Mentor</CardTitle>
                    <CardDescription>
                      Submit a request to be matched with a mentor for your ministry pathway
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="request-pathway">Ministry Pathway</Label>
                  <Select value={requestPathway} onValueChange={setRequestPathway}>
                    <SelectTrigger id="request-pathway">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mens">Men's Ministry</SelectItem>
                      <SelectItem value="womens">Women's Ministry</SelectItem>
                      <SelectItem value="youth">Youth Ministry</SelectItem>
                      <SelectItem value="teaching">Teaching Ministry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="request-message">Why do you need a mentor?</Label>
                  <Textarea
                    id="request-message"
                    placeholder="Share your ministry goals, challenges, and what you hope to gain from mentorship..."
                    rows={4}
                    value={requestMessage}
                    onChange={(e) => setRequestMessage(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleSubmitRequest}
                  disabled={requestMentorMutation.isPending}
                  className="w-full"
                >
                  {requestMentorMutation.isPending ? "Submitting..." : "Submit Mentor Request"}
                </Button>
                
                {myRequests.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">Your Requests</h4>
                    <div className="space-y-2">
                      {myRequests.map(req => (
                        <div key={req.id} className="text-sm p-2 bg-background rounded border border-border">
                          <div className="flex items-center justify-between">
                            <span className="font-medium capitalize">{req.pathway} Ministry</span>
                            <span className={`text-xs px-2 py-1 rounded ${
                              req.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                              req.status === "accepted" ? "bg-green-100 text-green-800" :
                              "bg-red-100 text-red-800"
                            }`}>
                              {req.status}
                            </span>
                          </div>
                          <p className="text-muted-foreground mt-1">{req.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
          {/* Mentor Information Card */}
          <Card className="shadow-lg border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <UserPlus className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle>Mentor Information</CardTitle>
                  <CardDescription>
                    Save your mentor's contact information for easy sharing
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mentor-name">Mentor Name</Label>
                <Input
                  id="mentor-name"
                  placeholder="e.g., Pastor John Smith"
                  value={mentorName}
                  onChange={(e) => setMentorName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-email">Mentor Email</Label>
                <Input
                  id="mentor-email"
                  type="email"
                  placeholder="mentor@church.org"
                  value={mentorEmail}
                  onChange={(e) => setMentorEmail(e.target.value)}
                />
              </div>
              <Button onClick={handleSaveMentor} className="w-full">
                Save Mentor Information
              </Button>
            </CardContent>
          </Card>

          {/* Share Progress Card */}
          <Card className="shadow-lg border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Share2 className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle>Share Progress Report</CardTitle>
                  <CardDescription>
                    Send your pathway progress and portfolio summary to your mentor
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="message">Optional Message</Label>
                <Textarea
                  id="message"
                  placeholder="Add a personal message to your mentor..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={handleShareProgress}
                  disabled={!mentorEmail}
                  className="flex-1"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Progress Report
                </Button>
                <Button
                  onClick={handleDownloadReport}
                  variant="outline"
                  className="flex-1"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
              {!mentorEmail && (
                <p className="text-sm text-muted-foreground text-center">
                  Save mentor information above to enable email sharing
                </p>
              )}
            </CardContent>
          </Card>

          {/* Progress Summary Card */}
          <Card className="shadow-lg border-border/50">
            <CardHeader>
              <CardTitle>Your Progress Summary</CardTitle>
              <CardDescription>
                Overview of your current progress across all pathways
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProgressSummary />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ProgressSummary() {
  const progressKey = "axiom-pathway-progress";
  const portfolioKey = "axiom-portfolio-items";

  const progress = JSON.parse(localStorage.getItem(progressKey) || "{}");
  const portfolio = JSON.parse(localStorage.getItem(portfolioKey) || "[]");

  const pathways = [
    { id: "mens", name: "Men's Ministry" },
    { id: "womens", name: "Women's Ministry" },
    { id: "youth", name: "Youth Ministry" },
    { id: "teaching", name: "Teaching Ministry" },
  ];

  return (
    <div className="space-y-4">
      {pathways.map(pathway => {
        const completed = Object.values(progress[pathway.id] || {}).filter(Boolean).length;
        const total = 6;
        const percentage = Math.round((completed / total) * 100);

        return (
          <div key={pathway.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{pathway.name}</span>
              <span className="text-sm text-muted-foreground">
                {completed}/{total} modules ({percentage}%)
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
      <div className="pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="font-medium">Portfolio Items</span>
          <span className="text-sm text-muted-foreground">{portfolio.length} items</span>
        </div>
      </div>
    </div>
  );
}
