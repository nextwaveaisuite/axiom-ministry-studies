import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, Lightbulb, Target, Shield, Compass } from "lucide-react";

export default function YouthMinistry() {
  const modules = [
    {
      number: 1,
      title: "Understanding Youth Culture & Development",
      scripture: "1 Timothy 4:12, Ecclesiastes 12:1",
      description: "Grasping adolescent development, cultural influences, and the unique challenges facing today's youth.",
      topics: [
        "Adolescent physical, emotional, and spiritual development",
        "Digital culture, social media, and technology impact",
        "Mental health awareness and pastoral care for youth",
        "Building trust and authentic relationships"
      ]
    },
    {
      number: 2,
      title: "Biblical Foundations for Youth Ministry",
      scripture: "Psalm 119:9-11, 2 Timothy 3:14-17",
      description: "Grounding youth ministry in Scripture and helping young people build a solid biblical worldview.",
      topics: [
        "Teaching Scripture to adolescents effectively",
        "Apologetics: answering tough questions",
        "Identity formation in Christ",
        "Worldview development and cultural engagement"
      ]
    },
    {
      number: 3,
      title: "Discipleship & Spiritual Formation",
      scripture: "Proverbs 22:6, Matthew 28:19-20",
      description: "Creating environments where youth can encounter God, grow in faith, and develop spiritual disciplines.",
      topics: [
        "Age-appropriate spiritual disciplines",
        "Small group ministry and peer discipleship",
        "Mentoring relationships that last",
        "Leading youth to personal faith and commitment"
      ]
    },
    {
      number: 4,
      title: "Safeguarding, Ethics & Boundaries",
      scripture: "Matthew 18:6, 1 Thessalonians 5:22",
      description: "Essential training in child protection, appropriate boundaries, and ethical youth ministry practices.",
      topics: [
        "Safeguarding policies and legal requirements",
        "Appropriate boundaries with youth",
        "Recognizing and reporting abuse",
        "Creating safe physical and emotional spaces"
      ]
    },
    {
      number: 5,
      title: "Family Partnership & Intergenerational Ministry",
      scripture: "Deuteronomy 6:4-9, Ephesians 6:1-4",
      description: "Partnering with parents and connecting youth to the broader church community.",
      topics: [
        "Supporting parents as primary disciplers",
        "Communicating effectively with families",
        "Intergenerational worship and service",
        "Navigating family dynamics and challenges"
      ]
    },
    {
      number: 6,
      title: "Ministering with Cultural Wisdom & Discernment",
      scripture: "Acts 17:16-34, 1 Corinthians 9:19-23",
      description: "Equipping youth workers to minister across cultures, including First Nations contexts, with sensitivity and wisdom.",
      topics: [
        "Understanding diverse cultural backgrounds",
        "First Nations youth: historical trauma and healing",
        "Avoiding cultural appropriation and harm",
        "Building culturally responsive youth programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-5xl">
        <Link href="/ministry">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Ministry Pathways
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1>Youth Ministry Pathway</h1>
              <p className="text-lg text-muted-foreground">
                Preparing those who minister to the next generation
              </p>
            </div>
          </div>
        </div>

        <Card className="shadow-lg border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Pathway Overview</CardTitle>
            <CardDescription className="text-base">
              Equipping youth workers with energy, truth, and cultural awareness
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              This pathway is designed for those called to walk alongside young people during their formative years.
              Whether you're a youth pastor, volunteer leader, parent, or mentor, these modules will equip you to
              minister effectively to adolescents with wisdom, safety, and genuine care while helping them build
              a lasting faith.
            </p>
            <div className="grid gap-4 md:grid-cols-3 pt-4">
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <BookOpen className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">6 Modules</h4>
                <p className="text-sm text-muted-foreground">Comprehensive youth ministry training</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <Target className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Safeguarding Focus</h4>
                <p className="text-sm text-muted-foreground">Essential protection training</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <Lightbulb className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Portfolio Building</h4>
                <p className="text-sm text-muted-foreground">Document your formation journey</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="mb-6">Learning Modules</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module) => (
              <AccordionItem
                key={module.number}
                value={`module-${module.number}`}
                className="border border-border/50 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-start gap-4 text-left">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">{module.number}</span>
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
                      <p className="text-sm text-foreground/90 italic">{module.scripture}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Topics Covered:</p>
                      <ul className="space-y-2">
                        {module.topics.map((topic, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
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

        <Card className="shadow-lg border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 mb-12">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Compass className="w-6 h-6 text-primary" />
              <CardTitle className="text-xl">Module 4: Safeguarding, Ethics & Boundaries</CardTitle>
            </div>
            <CardDescription className="text-base">
              Essential child protection training
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              This critical module is required for all youth workers. Learn safeguarding policies, appropriate boundaries,
              and how to create safe spaces where young people can thrive without risk of harm.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-border/50">
          <CardContent className="py-12 text-center">
            <h3 className="mb-4">Ready to Start This Pathway?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Complete your ministry intake to begin this formation journey and start building
              your portfolio of ministry evidence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/intake">
                <Button size="lg" className="px-8">
                  Complete Intake Form
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="px-8">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
