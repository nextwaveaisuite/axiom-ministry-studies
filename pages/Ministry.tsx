import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PathwayStudyGuide from "@/components/PathwayStudyGuide";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Heart, Lightbulb, Users, Compass } from "lucide-react";

export default function Ministry() {
  const pathways = [
    {
      title: "Men's Ministry",
      description: "Equipping men to lead with strength, humility, and godly character in their families, churches, and communities.",
      icon: Users,
      available: true,
      href: "/ministry/mens"
    },
    {
      title: "Women's Ministry",
      description: "Formation for women called to teach, shepherd, and disciple with wisdom and grace.",
      icon: Heart,
      available: true,
      href: "/ministry/womens"
    },
    {
      title: "Youth Ministry",
      description: "Preparing those who minister to the next generation with energy, truth, and cultural awareness.",
      icon: Lightbulb,
      available: true,
      href: "/ministry/youth"
    },
    {
      title: "Teaching Ministry",
      description: "Deep training for those who rightly divide the Word and ground others in sound doctrine.",
      icon: BookOpen,
      available: true,
      href: "/ministry/teaching"
    },
    {
      title: "Pastoral Care",
      description: "Shepherding skills for those who walk with people through suffering, transition, and growth.",
      icon: Compass,
      available: false,
      href: "#"
    },
    {
      title: "Cultural Wisdom & Discernment",
      description: "Equipping all believers to minister to and with First Nations people without causing harm—with humility, truth, and wisdom. (Integrated into all pathways as Module 6)",
      icon: Compass,
      available: false,
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Ministry Formation Pathways</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore learning pathways designed to equip you for your calling. Each pathway is grounded in Scripture,
            shaped by wisdom, and focused on practical ministry formation.
          </p>
        </div>

        {/* Five-Fold Ministry Framework */}
        <Card className="shadow-lg border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">The Biblical Framework</CardTitle>
            <CardDescription className="text-center text-base">
              Ephesians 4:11–13
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg italic text-foreground/90 leading-relaxed mb-6">
                "And He gave some to be apostles, some prophets, some evangelists, some pastors and teachers,
                for the equipping of the saints for the work of the ministry, for the edifying of the body of Christ."
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Apostles",
                  subtitle: "Sent ones, pioneers, builders",
                  description: "Those who establish, plant, and move where others will not go."
                },
                {
                  title: "Prophets",
                  subtitle: "Discerners, truth-speakers, watchers",
                  description: "Those who hear, see, and speak what aligns people back to God."
                },
                {
                  title: "Evangelists",
                  subtitle: "Proclaimers of the Gospel",
                  description: "Those who carry the good news to hearts not yet awakened."
                },
                {
                  title: "Pastors",
                  subtitle: "Shepherds and carers",
                  description: "Those who tend, protect, and walk with the flock."
                },
                {
                  title: "Teachers",
                  subtitle: "Instructors in truth",
                  description: "Those who rightly divide the Word and ground others in it."
                }
              ].map((role, index) => (
                <div
                  key={index}
                  className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50"
                >
                  <h4 className="font-serif font-semibold text-lg mb-1">{role.title}</h4>
                  <p className="text-sm text-primary mb-2">{role.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border/50 text-center">
              <p className="text-base text-foreground/90 leading-relaxed">
                <strong>Axiom's Purpose:</strong> These are not job titles or ranks—they are Christ-given functions
                for equipping all saints, regardless of role, age, gender, background, or maturity level.
                Axiom does not elevate titles or create hierarchy. It equips the Body of Christ for ministry and growth.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Available Pathways */}
        <div className="mb-8">
          <h2 className="mb-6">Available Learning Pathways</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pathways.map((pathway, index) => {
              const Icon = pathway.icon;
              return (
                <Card
                  key={index}
                  className={`shadow-md border-border/50 hover:shadow-lg transition-all ${
                    !pathway.available ? "opacity-60" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      {!pathway.available && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl">{pathway.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {pathway.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {pathway.available ? (
                      <>
                        <Link href={pathway.href}>
                          <Button className="w-full">
                            Explore Pathway
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                        {pathway.title === "Men's Ministry" && (
                          <PathwayStudyGuide pathway="mens" pathwayName="Men's Ministry" />
                        )}
                        {pathway.title === "Women's Ministry" && (
                          <PathwayStudyGuide pathway="womens" pathwayName="Women's Ministry" />
                        )}
                        {pathway.title === "Youth Ministry" && (
                          <PathwayStudyGuide pathway="youth" pathwayName="Youth Ministry" />
                        )}
                        {pathway.title === "Teaching Ministry" && (
                          <PathwayStudyGuide pathway="teaching" pathwayName="Teaching Ministry" />
                        )}
                      </>
                    ) : (
                      <Button className="w-full" variant="outline" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="shadow-lg border-border/50 bg-gradient-to-br from-accent/10 to-background">
          <CardContent className="py-12 text-center">
            <h3 className="mb-4">Ready to Begin?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Complete your ministry intake to receive personalized pathway recommendations
              based on your calling, context, and learning goals.
            </p>
            <Link href="/intake">
              <Button size="lg" className="px-8">
                Complete Intake Form
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
