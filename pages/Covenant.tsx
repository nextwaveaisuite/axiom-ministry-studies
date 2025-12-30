import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookHeart, Users, Home, Sprout } from "lucide-react";

export default function Covenant() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookHeart className="w-10 h-10 text-primary" />
            <h1 className="text-5xl font-serif font-bold text-foreground">
              The Axiom Covenant
            </h1>
          </div>
          <p className="text-xl text-muted-foreground italic">
            The Golden Oil of Understanding
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 shadow-lg border-primary/20">
          <CardContent className="pt-6 prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed">
              In Scripture, oil represents <strong>anointing</strong>, <strong>understanding</strong>, <strong>consecration</strong>, and <strong>preparation for service</strong>. Axiom is not the oil itself—Axiom is the vessel that carries it, so it can be poured wisely, not spilled carelessly.
            </p>
          </CardContent>
        </Card>

        {/* Who Axiom Is For */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">Axiom Is For</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground/90 leading-relaxed">
              Axiom is for those Christ has given to His Body (Ephesians 4:11):
            </p>
            
            <div className="grid gap-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg text-foreground">Apostles</h3>
                <p className="text-muted-foreground">Sent ones, pioneers, builders—those who establish, plant, and move where others will not go.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg text-foreground">Prophets</h3>
                <p className="text-muted-foreground">Discerners, truth-speakers, watchers—those who hear, see, and speak what aligns the people back to God.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg text-foreground">Evangelists</h3>
                <p className="text-muted-foreground">Proclaimers of the Gospel—those who carry the good news to hearts not yet awakened.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg text-foreground">Pastors</h3>
                <p className="text-muted-foreground">Shepherds and carers—those who tend, protect, and walk with the flock.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg text-foreground">Teachers</h3>
                <p className="text-muted-foreground">Instructors in truth and understanding—those who rightly divide the Word and ground others in it.</p>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <p className="text-foreground font-medium text-center">
                These are <strong>functions</strong>, not ranks. <strong>Gifts</strong>, not ladders.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Purpose */}
        <Card className="mb-8 shadow-lg border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl">The Purpose</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-foreground/90">
              "…for the equipping of the saints for the work of the ministry, for the edifying of the body of Christ."
              <footer className="text-sm text-muted-foreground mt-2">— Ephesians 4:12</footer>
            </blockquote>
            
            <p className="text-foreground/90 leading-relaxed">
              Axiom exists for this purpose alone. Not performance. Not recognition. Not institution-building.
            </p>
            
            <p className="text-center font-bold text-xl text-primary">
              Equipping. Edifying. Maturing.
            </p>
          </CardContent>
        </Card>

        {/* What Axiom Will Never Do */}
        <Card className="mb-8 shadow-lg bg-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl">What Axiom Will Never Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-foreground/90 mb-4">This matters deeply. Axiom:</p>
            
            <div className="space-y-2 text-foreground/80">
              <p>❌ does not elevate titles</p>
              <p>❌ does not create hierarchy</p>
              <p>❌ does not measure worth by role</p>
              <p>❌ does not replace the Holy Spirit</p>
              <p>❌ does not bypass relationship, family, or church</p>
            </div>
            
            <p className="text-muted-foreground italic mt-4">
              Because Christ Himself did not do these things.
            </p>
          </CardContent>
        </Card>

        {/* Who Axiom Is For (Inclusive) */}
        <Card className="mb-8 shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Axiom Equips Saints</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">That means:</p>
            
            <div className="grid md:grid-cols-2 gap-3 text-foreground/80">
              <p>✓ regardless of role</p>
              <p>✓ regardless of age</p>
              <p>✓ regardless of gender</p>
              <p>✓ regardless of background</p>
              <p>✓ regardless of maturity level</p>
              <p>✓ regardless of past failure</p>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 mt-6">
              <p className="text-center text-lg font-medium text-foreground">
                If a person is hungry for God, Axiom makes room for them.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Core Axiom */}
        <Card className="mb-8 shadow-lg border-primary/40 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Home className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">The Core Axiom</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <blockquote className="text-lg text-foreground/90 leading-relaxed border-l-4 border-primary pl-6">
              "We are to seek out and learn everything there is to know more about God. Who He is in our lives. What He is in our lives. And to pass this on to our children, and their children's children. Everything they learn, they learn from us."
            </blockquote>
            
            <p className="text-foreground/90 leading-relaxed">
              This is <strong>Deuteronomy 6</strong> living in the present. This is:
            </p>
            
            <div className="space-y-2 text-foreground/80 ml-6">
              <p>• family discipleship</p>
              <p>• generational faithfulness</p>
              <p>• lived theology</p>
            </div>
          </CardContent>
        </Card>

        {/* What Axiom Really Is */}
        <Card className="shadow-lg border-primary/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Sprout className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">What Axiom Really Is</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Axiom is a <strong>formation vessel</strong> that helps the saints learn deeply, walk humbly, serve faithfully, and pass on the knowledge of God from generation to generation.
            </p>
            
            <div className="space-y-2 text-foreground/80">
              <p>✓ rooted in Scripture</p>
              <p>✓ guided by wisdom</p>
              <p>✓ shaped by humility</p>
              <p>✓ guarded from pride</p>
              <p>✓ open to all who seek Him</p>
            </div>
            
            <div className="bg-primary/10 p-8 rounded-lg border border-primary/30 mt-8">
              <p className="text-center text-xl font-serif italic text-foreground">
                The oil is already flowing. This is a covenant path, not a product.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
