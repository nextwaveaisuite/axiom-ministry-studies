import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, CheckCircle2, Flame, Heart, Users } from "lucide-react";

interface BadgeData {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  earnedDate?: string;
}

export default function ProgressBadges() {
  const [badges, setBadges] = useState<BadgeData[]>([]);

  useEffect(() => {
    calculateBadges();
  }, []);

  const calculateBadges = () => {
    // Get progress data
    const progressData = localStorage.getItem("axiom-pathway-progress");
    const portfolioData = localStorage.getItem("axiom-portfolio");
    const intakeData = localStorage.getItem("axiom-intake");
    
    const progress = progressData ? JSON.parse(progressData) : {};
    const portfolio = portfolioData ? JSON.parse(portfolioData) : [];
    const intakeComplete = !!intakeData;

    // Calculate total modules completed
    const totalCompleted = Object.values(progress).reduce((sum: number, pathway: any) => {
      return sum + Object.values(pathway).filter((v: any) => v === true).length;
    }, 0);

    // Check pathway completions
    const mensComplete = progress.mens && Object.keys(progress.mens).length === 6 && 
                        Object.values(progress.mens).every((v: any) => v === true);
    const womensComplete = progress.womens && Object.keys(progress.womens).length === 6 && 
                          Object.values(progress.womens).every((v: any) => v === true);
    const youthComplete = progress.youth && Object.keys(progress.youth).length === 6 && 
                         Object.values(progress.youth).every((v: any) => v === true);
    const teachingComplete = progress.teaching && Object.keys(progress.teaching).length === 6 && 
                            Object.values(progress.teaching).every((v: any) => v === true);

    const anyPathwayComplete = mensComplete || womensComplete || youthComplete || teachingComplete;
    const allPathwaysComplete = mensComplete && womensComplete && youthComplete && teachingComplete;

    const badgeList: BadgeData[] = [
      {
        id: "first-steps",
        name: "First Steps",
        description: "Completed your Ministry Intake form",
        icon: <CheckCircle2 className="w-6 h-6" />,
        earned: intakeComplete,
        earnedDate: intakeComplete ? new Date().toLocaleDateString() : undefined
      },
      {
        id: "dedicated-learner",
        name: "Dedicated Learner",
        description: "Completed 5 modules",
        icon: <BookOpen className="w-6 h-6" />,
        earned: totalCompleted >= 5,
        earnedDate: totalCompleted >= 5 ? new Date().toLocaleDateString() : undefined
      },
      {
        id: "on-fire",
        name: "On Fire",
        description: "Completed 10 modules",
        icon: <Flame className="w-6 h-6" />,
        earned: totalCompleted >= 10,
        earnedDate: totalCompleted >= 10 ? new Date().toLocaleDateString() : undefined
      },
      {
        id: "portfolio-builder",
        name: "Portfolio Builder",
        description: "Created 5 portfolio items",
        icon: <Heart className="w-6 h-6" />,
        earned: portfolio.length >= 5,
        earnedDate: portfolio.length >= 5 ? new Date().toLocaleDateString() : undefined
      },
      {
        id: "pathway-complete",
        name: "Pathway Complete",
        description: "Completed an entire ministry pathway",
        icon: <Award className="w-6 h-6" />,
        earned: anyPathwayComplete,
        earnedDate: anyPathwayComplete ? new Date().toLocaleDateString() : undefined
      },
      {
        id: "master-equiper",
        name: "Master Equiper",
        description: "Completed all four ministry pathways",
        icon: <Users className="w-6 h-6" />,
        earned: allPathwaysComplete,
        earnedDate: allPathwaysComplete ? new Date().toLocaleDateString() : undefined
      }
    ];

    setBadges(badgeList);
  };

  const earnedBadges = badges.filter(b => b.earned);
  const unearnedBadges = badges.filter(b => !b.earned);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Your Achievements
        </CardTitle>
        <CardDescription>
          Earn badges as you progress through your ministry formation journey
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Earned Badges */}
        {earnedBadges.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-3 text-foreground">Earned ({earnedBadges.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {earnedBadges.map(badge => (
                <div
                  key={badge.id}
                  className="flex items-start gap-3 p-4 rounded-lg border border-primary/30 bg-primary/5"
                >
                  <div className="text-primary mt-1">
                    {badge.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground">{badge.name}</h4>
                      <Badge variant="secondary" className="text-xs">Earned</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                    {badge.earnedDate && (
                      <p className="text-xs text-muted-foreground mt-1">Earned: {badge.earnedDate}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Unearned Badges */}
        {unearnedBadges.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Not Yet Earned ({unearnedBadges.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unearnedBadges.map(badge => (
                <div
                  key={badge.id}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30 opacity-60"
                >
                  <div className="text-muted-foreground mt-1">
                    {badge.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-muted-foreground">{badge.name}</h4>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {badges.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            Start your journey to earn achievement badges!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
