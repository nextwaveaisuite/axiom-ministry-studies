import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, Heart, Target, Users, Shield, Compass } from "lucide-react";

export default function MensMinistry() {
  const modules = [
    {
      number: 1,
      title: "Biblical Foundations of Manhood",
      scripture: "Genesis 1:26-28, Ephesians 5:25-33",
      description: "Understanding God's design for men as image-bearers, leaders, and servants in the Kingdom.",
      topics: [
        "Created in God's image: identity and purpose",
        "The call to lead with sacrificial love",
        "Stewarding authority with humility",
        "Manhood across cultures and contexts"
      ]
    },
    {
      number: 2,
      title: "Character Formation & Spiritual Disciplines",
      scripture: "1 Timothy 3:1-7, Galatians 5:22-23",
      description: "Developing godly character through prayer, Scripture, accountability, and the fruit of the Spirit.",
      topics: [
        "The fruit of the Spirit in daily life",
        "Disciplines of prayer and Scripture meditation",
        "Accountability and authentic community",
        "Overcoming temptation and sin patterns"
      ]
    },
    {
      number: 3,
      title: "Marriage, Family & Fatherhood",
      scripture: "Ephesians 5:22-33, Deuteronomy 6:4-9",
      description: "Equipping men to love their wives, disciple their children, and lead their families faithfully.",
      topics: [
        "Loving your wife as Christ loved the church",
        "Fatherhood: blessing, discipline, and legacy",
        "Teaching faith to children and grandchildren",
        "Navigating family transitions and challenges"
      ]
    },
    {
      number: 4,
      title: "Work, Calling & Kingdom Purpose",
      scripture: "Colossians 3:23-24, 1 Corinthians 10:31",
      description: "Seeing work as worship and discerning God's calling in every season of life.",
      topics: [
        "Work as an act of worship",
        "Discerning your calling and gifts",
        "Integrity in the workplace",
        "Kingdom purpose beyond career"
      ]
    },
    {
      number: 5,
      title: "Brotherhood, Mentoring & Discipleship",
      scripture: "Proverbs 27:17, 2 Timothy 2:2",
      description: "Building authentic brotherhood and passing on faith through mentoring relationships.",
      topics: [
        "Iron sharpens iron: authentic male friendship",
        "The call to mentor younger men",
        "Discipleship as a way of life",
        "Creating spaces for men to grow together"
      ]
    },
    {
      number: 6,
      title: "Ministering with Cultural Wisdom & Discernment",
      scripture: "Acts 17:16-34, 1 Corinthians 9:19-23",
      description: "Equipping men to minister faithfully across cultures, including First Nations contexts, with humility and wisdom.",
      topics: [
        "Understanding cultural contexts without compromising truth",
        "First Nations ministry: listening, learning, and serving",
        "Avoiding cultural harm and paternalism",
        "Building bridges with discernment and respect"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-5xl">
        {/* Back Button */}
        <Link href="/ministry">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Ministry Pathways
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1>Men's Ministry Pathway</h1>
              <p className="text-lg text-muted-foreground">
                Formation for godly manhood, leadership, and discipleship
              </p>
            </div>
          </div>
        </div>

        {/* Overview Card */}
        <Card className="shadow-lg border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Pathway Overview</CardTitle>
            <CardDescription className="text-base">
              Equipping men to lead with strength, humility, and godly character
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              This pathway is designed for men seeking to grow in their understanding of biblical manhood,
              develop godly character, strengthen their families, and serve faithfully in their churches and communities.
              Whether you're a husband, father, mentor, or leader, these modules will ground you in Scripture
              and equip you for the work God has called you to.
            </p>
            <div className="grid gap-4 md:grid-cols-3 pt-4">
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <BookOpen className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">6 Modules</h4>
                <p className="text-sm text-muted-foreground">Comprehensive biblical teaching</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <Target className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Practical Application</h4>
                <p className="text-sm text-muted-foreground">Real-world ministry scenarios</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <Heart className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Portfolio Building</h4>
                <p className="text-sm text-muted-foreground">Document your formation journey</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modules */}
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

        {/* Module 6 Highlight */}
        <Card className="shadow-lg border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 mb-12">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Compass className="w-6 h-6 text-primary" />
              <CardTitle className="text-xl">Module 6: Cultural Wisdom & Discernment</CardTitle>
            </div>
            <CardDescription className="text-base">
              Including First Nations contexts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              This essential module equips all five Christ-given functions—Apostles, Prophets, Evangelists,
              Pastors, and Teachers—to minister without harm, with discernment, humility, truth, and wisdom.
            </p>
            <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <p className="text-sm text-foreground/90 leading-relaxed">
                <strong>For Men in Ministry:</strong> Learn to build, discern, proclaim, shepherd, and teach
                across cultural boundaries with respect and faithfulness. Understand First Nations realities
                and histories to minister wisely and avoid causing harm.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
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
