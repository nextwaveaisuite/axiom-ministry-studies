import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ProgressBadges from "@/components/ProgressBadges";
import { Link } from "wouter";
import { CheckCircle2, Circle, ArrowRight, BookOpen, FileText, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

interface PathwayProgress {
  [pathway: string]: {
    [module: number]: boolean;
  };
}

export default function Home() {
  const [hasIntake, setHasIntake] = useState(false);
  const [portfolioCount, setPortfolioCount] = useState(0);
  const [progress, setProgress] = useState<PathwayProgress>({});

  useEffect(() => {
    const intake = localStorage.getItem("axiom_ministry_intake_v1");
    setHasIntake(!!intake);

    const portfolio = localStorage.getItem("axiom_portfolio_v1");
    if (portfolio) {
      try {
        const items = JSON.parse(portfolio);
        setPortfolioCount(items.length);
      } catch (e) {
        setPortfolioCount(0);
      }
    }

    const savedProgress = localStorage.getItem("axiom-pathway-progress");
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        setProgress({});
      }
    }
  }, []);

  const pathways = [
    { id: "mens", name: "Men's Ministry", modules: 6 },
    { id: "womens", name: "Women's Ministry", modules: 6 },
    { id: "youth", name: "Youth Ministry", modules: 6 },
    { id: "teaching", name: "Teaching Ministry", modules: 6 }
  ];

  const calculatePathwayProgress = (pathwayId: string, totalModules: number) => {
    const pathwayProgress = progress[pathwayId] || {};
    const completedModules = Object.values(pathwayProgress).filter(Boolean).length;
    return (completedModules / totalModules) * 100;
  };

  const totalModulesCompleted = pathways.reduce((sum, p) => 
    sum + Object.values(progress[p.id] || {}).filter(Boolean).length, 0
  );

  const toggleModuleCompletion = (pathwayId: string, moduleNumber: number) => {
    const newProgress = { ...progress };
    if (!newProgress[pathwayId]) {
      newProgress[pathwayId] = {};
    }
    newProgress[pathwayId][moduleNumber] = !newProgress[pathwayId][moduleNumber];
    setProgress(newProgress);
    localStorage.setItem("axiom-pathway-progress", JSON.stringify(newProgress));
  };

  const steps = [
    {
      number: 1,
      title: "Complete Intake",
      description: "Share your ministry context and learning goals",
      completed: hasIntake,
      href: "/intake"
    },
    {
      number: 2,
      title: "Explore Pathways",
      description: "Choose a ministry pathway and begin learning",
      completed: totalModulesCompleted > 0,
      href: "/ministry"
    },
    {
      number: 3,
      title: "Build Portfolio",
      description: "Document reflections, sermons, and ministry evidence",
      completed: portfolioCount > 0,
      href: "/portfolio"
    },
    {
      number: 4,
      title: "Export & Share",
      description: "Download your portfolio to share with mentors",
      completed: false,
      href: "/portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container text-center">
          <h1 className="mb-6">Axiom Ministry Studies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            A formation platform for equipping the saints through the gifts Christ has given—
            apostles, prophets, evangelists, pastors, and teachers—for the building up of the Body
            of Christ.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/intake">
              <Button size="lg" className="px-8">
                Begin Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/ministry">
              <Button size="lg" variant="outline" className="px-8">
                Explore Ministry Pathways
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="shadow-md border-border/50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{portfolioCount}</div>
                  <p className="text-sm text-muted-foreground">Portfolio Items</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md border-border/50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{totalModulesCompleted}</div>
                  <p className="text-sm text-muted-foreground">Modules Completed</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md border-border/50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {hasIntake ? "✓" : "—"}
                  </div>
                  <p className="text-sm text-muted-foreground">Intake Complete</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl">
          <h2 className="mb-4 text-center">Your Formation Journey</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Follow these steps to grow in understanding, deepen your calling, and document
            your ministry formation.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <Link key={step.number} href={step.href}>
                <Card className="shadow-md border-border/50 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {step.completed ? (
                          <CheckCircle2 className="w-8 h-8 text-primary" />
                        ) : (
                          <Circle className="w-8 h-8 text-muted-foreground/50" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-muted-foreground">
                            Step {step.number}
                          </span>
                        </div>
                        <h3 className="text-xl font-serif font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway Progress */}
      {totalModulesCompleted > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="mb-4 text-center">Pathway Progress</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Track your completion across ministry pathways
            </p>

            <div className="grid gap-6">
              {pathways.map((pathway) => {
                const progressPercent = calculatePathwayProgress(pathway.id, pathway.modules);
                const completedModules = Object.values(progress[pathway.id] || {}).filter(Boolean).length;
                
                if (completedModules === 0) return null;

                return (
                  <Card key={pathway.id} className="shadow-md border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{pathway.name}</CardTitle>
                        <span className="text-sm text-muted-foreground">
                          {completedModules} / {pathway.modules} modules
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={progressPercent} className="h-2" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container max-w-3xl text-center">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="mb-4">Ready to Begin?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your ministry formation journey today. Complete your intake, explore pathways,
            and build a portfolio of your growth and learning.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/intake">
              <Button size="lg" className="px-8">
                Complete Intake Form
              </Button>
            </Link>
            <Link href="/ministry">
              <Button size="lg" variant="outline" className="px-8">
                View All Pathways
              </Button>
            </Link>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-12 container">
          <ProgressBadges />
        </div>
      </section>
    </div>
  );
}
