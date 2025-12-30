import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users2, BookOpen, Home } from "lucide-react";

export default function FamilyGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Home className="w-10 h-10 text-primary" />
            <h1 className="text-5xl font-serif font-bold text-foreground">
              Family Engagement Guide
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Passing the knowledge of God from generation to generation
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 shadow-lg border-primary/20">
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Axiom Ministry Studies is designed not just for individuals, but for <strong>families</strong>, <strong>couples</strong>, and <strong>generations</strong> learning together. Ministry formation begins at home, and the most powerful discipleship happens when parents and children walk the same path.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80">
              "And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise."
              <footer className="text-sm text-muted-foreground mt-2">— Deuteronomy 6:6-7</footer>
            </blockquote>
          </CardContent>
        </Card>

        {/* For Couples */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">For Couples</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              Husbands and wives can journey through Axiom together, strengthening their marriage while growing in ministry. Here's how:
            </p>
            
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">1. Choose Complementary Pathways</h3>
                <p className="text-muted-foreground">
                  One spouse might focus on Men's/Women's Ministry while the other explores Teaching or Pastoral Care. Share insights weekly.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">2. Study Together</h3>
                <p className="text-muted-foreground">
                  Set aside time each week to discuss module content, reflection questions, and practicum tasks. Pray together over what you're learning.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">3. Serve Together</h3>
                <p className="text-muted-foreground">
                  Complete practicum tasks as a team. Visit shut-ins together, serve at church events, or mentor younger couples.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">4. Build Your Portfolio Together</h3>
                <p className="text-muted-foreground">
                  Document your ministry journey as a couple. Write reflections on how God is shaping your marriage and ministry calling.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* For Parents and Children */}
        <Card className="mb-8 shadow-lg border-primary/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users2 className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">For Parents and Children</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              Axiom is designed for <strong>generational discipleship</strong>. Parents don't just study alone—they bring their children into the journey.
            </p>
            
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h3 className="font-bold text-foreground mb-2">Age-Appropriate Engagement</h3>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li><strong>Young Children (5-10):</strong> Read Scripture passages aloud at meals. Ask simple questions: "Who is God in this story?" "How does He love us?"</li>
                  <li><strong>Pre-Teens (11-13):</strong> Invite them to listen to module videos with you. Discuss one teaching point per week in age-appropriate language.</li>
                  <li><strong>Teenagers (14+):</strong> Encourage them to enroll in Youth Ministry pathway. Study parallel modules together and compare insights.</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Family Practicum Ideas</h3>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Serve together at a local food bank or community event</li>
                  <li>Visit elderly church members as a family</li>
                  <li>Pray together for missionaries or church leaders</li>
                  <li>Host a neighborhood BBQ and share the Gospel naturally</li>
                  <li>Read Christian biographies together and discuss their faith</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Modeling Ministry</h3>
                <p className="text-muted-foreground">
                  Children learn ministry by watching their parents. When you complete Axiom modules, you're not just learning—you're modeling what it means to be a lifelong learner of God's Word.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generational Discipleship */}
        <Card className="mb-8 shadow-lg bg-primary/5 border-primary/40">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">Generational Discipleship</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              Axiom exists to help families pass the knowledge of God from <strong>parents to children to grandchildren</strong>. This is not a program—it's a way of life.
            </p>
            
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-foreground">Generation 1: Parents</h3>
                <p className="text-muted-foreground">You study Axiom pathways, grow in ministry, and model faithfulness to your children.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-foreground">Generation 2: Children</h3>
                <p className="text-muted-foreground">They watch you study, join age-appropriate discussions, and eventually enroll in their own pathways as teenagers.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-foreground">Generation 3: Grandchildren</h3>
                <p className="text-muted-foreground">Your children pass the same knowledge to their children, creating a legacy of faithfulness.</p>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-primary/30 mt-6">
              <p className="text-center text-lg font-medium text-foreground">
                "Everything they learn, they learn from us."
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">
                This is the heart of Axiom.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Practical Tips */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Practical Tips for Families</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2 text-foreground/80">
              <p>✓ <strong>Set a weekly family study time</strong> - Even 30 minutes makes a difference</p>
              <p>✓ <strong>Use meal times for discussion</strong> - Share one thing you learned this week</p>
              <p>✓ <strong>Pray together over module content</strong> - Ask God to shape your family through His Word</p>
              <p>✓ <strong>Create a family portfolio</strong> - Document your journey with photos, reflections, and stories</p>
              <p>✓ <strong>Celebrate milestones together</strong> - When someone completes a pathway, celebrate as a family</p>
              <p>✓ <strong>Connect with other families</strong> - Use the discussion forums to encourage other families on the same journey</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
