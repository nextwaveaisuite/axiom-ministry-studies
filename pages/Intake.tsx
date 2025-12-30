import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useLocation } from "wouter";

interface IntakeData {
  name: string;
  church: string;
  role: string;
  stage: string;
  weeklyTime: string;
  focusAreas: string[];
  learningStyles: string[];
  notes: string;
}

const FOCUS_AREAS = [
  "Men's Ministry",
  "Women's Ministry",
  "Youth Ministry",
  "Teaching",
  "Pastoral Care",
  "First Nations Ministry",
  "Evangelism",
  "Discipleship"
];

const LEARNING_STYLES = [
  "Reading & Study",
  "Video Content",
  "Interactive Exercises",
  "Group Discussion",
  "Practical Application",
  "Mentoring"
];

export default function Intake() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState<IntakeData>({
    name: "",
    church: "",
    role: "",
    stage: "",
    weeklyTime: "",
    focusAreas: [],
    learningStyles: [],
    notes: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("axiom_ministry_intake_v1");
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved intake data", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.church || !formData.role) {
      toast.error("Please fill in all required fields");
      return;
    }

    localStorage.setItem("axiom_ministry_intake_v1", JSON.stringify(formData));
    toast.success("Intake information saved successfully");
    setTimeout(() => setLocation("/portfolio"), 1500);
  };

  const toggleFocusArea = (area: string) => {
    setFormData(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter(a => a !== area)
        : [...prev.focusAreas, area]
    }));
  };

  const toggleLearningStyle = (style: string) => {
    setFormData(prev => ({
      ...prev,
      learningStyles: prev.learningStyles.includes(style)
        ? prev.learningStyles.filter(s => s !== style)
        : [...prev.learningStyles, style]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4">Ministry Intake</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us understand your ministry context and learning needs so we can provide
            personalized formation resources tailored to your calling and season.
          </p>
        </div>

        <Card className="shadow-lg border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Your Ministry Profile</CardTitle>
            <CardDescription>
              All information is stored locally on your device and used only to customize your learning experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="church">Church / Organization *</Label>
                  <Input
                    id="church"
                    value={formData.church}
                    onChange={(e) => setFormData({ ...formData, church: e.target.value })}
                    placeholder="Your church or ministry organization"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="role">Current Role & Responsibilities *</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., Youth Pastor, Elder, Small Group Leader"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="stage">Ministry Stage</Label>
                  <Input
                    id="stage"
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    placeholder="e.g., Exploring, New to Ministry, Experienced, Transitioning"
                  />
                </div>

                <div>
                  <Label htmlFor="weeklyTime">Weekly Time Commitment</Label>
                  <Input
                    id="weeklyTime"
                    value={formData.weeklyTime}
                    onChange={(e) => setFormData({ ...formData, weeklyTime: e.target.value })}
                    placeholder="e.g., 2-3 hours per week"
                  />
                </div>
              </div>

              {/* Focus Areas */}
              <div className="space-y-3">
                <Label className="text-base">Ministry Focus Areas</Label>
                <p className="text-sm text-muted-foreground">Select all areas that interest you or align with your calling</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {FOCUS_AREAS.map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox
                        id={`focus-${area}`}
                        checked={formData.focusAreas.includes(area)}
                        onCheckedChange={() => toggleFocusArea(area)}
                      />
                      <Label
                        htmlFor={`focus-${area}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {area}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Styles */}
              <div className="space-y-3">
                <Label className="text-base">Preferred Learning Styles</Label>
                <p className="text-sm text-muted-foreground">How do you learn best?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {LEARNING_STYLES.map((style) => (
                    <div key={style} className="flex items-center space-x-2">
                      <Checkbox
                        id={`style-${style}`}
                        checked={formData.learningStyles.includes(style)}
                        onCheckedChange={() => toggleLearningStyle(style)}
                      />
                      <Label
                        htmlFor={`style-${style}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {style}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any additional context about your ministry journey, specific learning goals, or questions you're exploring..."
                  rows={5}
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button type="submit" size="lg" className="px-8">
                  Save & Continue
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
