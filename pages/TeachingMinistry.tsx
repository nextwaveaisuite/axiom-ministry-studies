import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, Target, Shield, Compass } from "lucide-react";

export default function TeachingMinistry() {
  const modules = [
    {
      number: 1,
      title: "The Call and Character of the Teacher",
      scripture: "James 3:1, 2 Timothy 2:15",
      description: "Understanding the weight, responsibility, and character required of those who teach God's Word.",
      topics: [
        "The sobering responsibility of teaching (James 3:1)",
        "Character qualifications for teachers",
        "Humility, integrity, and ongoing learning",
        "The teacher as a lifelong student of Scripture"
      ]
    },
    {
      number: 2,
      title: "Biblical Interpretation & Sound Doctrine",
      scripture: "2 Timothy 2:15, Acts 17:11",
      description: "Learning to rightly divide the Word of Truth through proper hermeneutics and theological foundations.",
      topics: [
        "Principles of biblical interpretation (hermeneutics)",
        "Context, genre, and original meaning",
        "Systematic theology foundations",
        "Avoiding eisegesis and false teaching"
      ]
    },
    {
      number: 3,
      title: "Preparing and Delivering Biblical Teaching",
      scripture: "Nehemiah 8:8, Luke 24:27",
      description: "Practical skills for sermon preparation, lesson planning, and effective communication of Scripture.",
      topics: [
        "Sermon and lesson preparation process",
        "Expository, topical, and narrative teaching methods",
        "Engaging different learning styles",
        "Using illustrations, stories, and application"
      ]
    },
    {
      number: 4,
      title: "Teaching Across Ages and Contexts",
      scripture: "Titus 2:1-8, 1 Corinthians 3:1-2",
      description: "Adapting teaching methods for children, youth, adults, and diverse cultural contexts.",
      topics: [
        "Age-appropriate teaching strategies",
        "Teaching children: concrete and active learning",
        "Teaching youth: identity and worldview formation",
        "Teaching adults: depth, application, and discipleship"
      ]
    },
    {
      number: 5,
      title: "Handling Difficult Questions and Controversies",
      scripture: "2 Timothy 2:23-26, 1 Peter 3:15",
      description: "Equipping teachers to address tough questions, theological disputes, and cultural challenges with grace and truth.",
      topics: [
        "Apologetics: defending the faith with gentleness",
        "Navigating theological disagreements",
        "Addressing cultural and ethical issues biblically",
        "When to speak and when to remain silent"
      ]
    },
    {
      number: 6,
      title: "Ministering with Cultural Wisdom & Discernment",
      scripture: "Acts 17:16-34, 1 Corinthians 9:19-23",
      description: "Equipping teachers to communicate truth across cultures, including First Nations contexts, with wisdom and respect.",
      topics: [
        "Contextualizing truth without compromising it",
        "First Nations contexts: understanding worldview and history",
        "Avoiding cultural imperialism in teaching",
        "Building bridges through respectful dialogue"
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
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1>Teaching Ministry Pathway</h1>
              <p className="text-lg text-muted-foreground">
                Deep training for those who rightly divide the Word
              </p>
            </div>
          </div>
        </div>

        <Card className="shadow-lg border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Pathway Overview</CardTitle>
            <CardDescription className="text-base">
              Equipping teachers to ground others in sound doctrine and biblical truth
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              This pathway is designed for those called to teach God's Word—whether in pulpits, classrooms, small groups,
              or one-on-one discipleship. These modules will deepen your understanding of Scripture, sharpen your
              interpretive skills, and equip you to communicate biblical truth clearly, faithfully, and effectively
              across diverse contexts.
            </p>
            <div className="grid gap-4 md:grid-cols-3 pt-4">
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <BookOpen className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">6 Modules</h4>
                <p className="text-sm text-muted-foreground">Comprehensive teaching training</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <Target className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Hermeneutics Focus</h4>
                <p className="text-sm text-muted-foreground">Biblical interpretation skills</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <BookOpen className="w-6 h-6 text-primary mb-2" />
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
              <CardTitle className="text-xl">Module 2: Biblical Interpretation & Sound Doctrine</CardTitle>
            </div>
            <CardDescription className="text-base">
              Foundational hermeneutics training
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              Learn to rightly divide the Word of Truth through proper biblical interpretation methods. This module
              provides essential training in hermeneutics, systematic theology, and avoiding common interpretive errors.
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
