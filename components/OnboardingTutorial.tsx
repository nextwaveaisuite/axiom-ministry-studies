import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

interface TutorialStep {
  title: string;
  description: string;
  action?: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    title: "Welcome to Axiom Ministry Studies",
    description: "Axiom is a formation platform for equipping the saints through the gifts Christ has given—apostles, prophets, evangelists, pastors, and teachers—for the building up of the Body of Christ.",
    action: "Get Started"
  },
  {
    title: "Complete Your Intake Form",
    description: "Start by filling out the Ministry Intake form. This helps us understand your ministry context, focus areas, and learning preferences.",
    action: "Go to Intake"
  },
  {
    title: "Explore Ministry Pathways",
    description: "Choose from four ministry pathways: Men's Ministry, Women's Ministry, Youth Ministry, or Teaching Ministry. Each pathway has 6 comprehensive modules.",
    action: "View Pathways"
  },
  {
    title: "Work Through Modules",
    description: "Each module includes Scripture study, teaching content, reflection questions, practicum tasks, videos, and audio resources. Learn at your own pace.",
    action: "Browse Modules"
  },
  {
    title: "Build Your Portfolio",
    description: "Document your ministry formation journey with reflections, sermon outlines, teaching plans, practicum logs, and mentoring notes.",
    action: "Open Portfolio"
  },
  {
    title: "Connect with a Mentor",
    description: "Request a mentor to guide you through your pathway. Share your progress and portfolio with them for accountability and encouragement.",
    action: "Find Mentor"
  },
  {
    title: "You're Ready to Begin!",
    description: "You now know how to navigate Axiom. Start your formation journey today and grow in your calling to serve the Body of Christ.",
    action: "Start Learning"
  }
];

export default function OnboardingTutorial() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check if user has seen the tutorial
    const hasSeenTutorial = localStorage.getItem("axiom-tutorial-completed");
    if (!hasSeenTutorial) {
      setIsOpen(true);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTutorial();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeTutorial = () => {
    localStorage.setItem("axiom-tutorial-completed", "true");
    setIsOpen(false);
  };

  const skipTutorial = () => {
    localStorage.setItem("axiom-tutorial-completed", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const step = tutorialSteps[currentStep];
  const isLastStep = currentStep === tutorialSteps.length - 1;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-2xl">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Step {currentStep + 1} of {tutorialSteps.length}
                </span>
              </div>
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-2">
                {step.title}
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={skipTutorial}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {step.description}
          </p>

          {/* Progress indicator */}
          <div className="flex gap-2 mb-8">
            {tutorialSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  index <= currentStep ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button onClick={skipTutorial} variant="ghost" className="text-muted-foreground">
              Skip Tutorial
            </Button>

            <Button onClick={handleNext} className="gap-2">
              {isLastStep ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Get Started
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
