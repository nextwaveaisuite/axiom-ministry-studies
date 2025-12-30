import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-4xl">
        <h1 className="mb-8 text-center">Terms of Service</h1>
        
        <Card className="shadow-lg border-border/50">
          <CardHeader>
            <CardTitle>Axiom Ministry Studies Terms</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-6">
            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">1. Purpose and Scope</h3>
              <p className="text-muted-foreground leading-relaxed">
                Axiom Ministry Studies is a formation platform designed to equip believers for ministry through
                the gifts Christ has given—apostles, prophets, evangelists, pastors, and teachers. This platform
                provides learning resources, reflection tools, and portfolio management for personal ministry development.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">2. No Accreditation Claims</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Important:</strong> Axiom Ministry Studies does not provide accredited qualifications,
                certifications, or formal credentials. Completion of pathways and modules does not constitute
                formal theological education or ordination. This platform is for personal formation and learning only.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">3. Human Review Required</h3>
              <p className="text-muted-foreground leading-relaxed">
                All content generated or provided through this platform should be reviewed by qualified spiritual
                leaders, mentors, or pastors before being used in ministry contexts. Users are responsible for
                ensuring theological accuracy and appropriateness of all materials.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">4. Local Storage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your intake information and portfolio items are stored locally on your device using browser localStorage.
                We do not collect, store, or transmit your personal information to external servers. You are responsible
                for backing up your data through the export functionality provided.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">5. Content Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for the content they create, save, and share through this platform. Axiom
                provides frameworks and guidance, but users must exercise discernment and seek appropriate oversight
                for their ministry activities.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">6. Age and Oversight Requirements</h3>
              <p className="text-muted-foreground leading-relaxed">
                Youth and children's ministry content requires appropriate parental or mentor oversight. See our
                Age Policy for detailed requirements regarding ministry to minors.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">7. Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Axiom Ministry Studies is provided "as is" for personal formation purposes. We make no warranties
                regarding the completeness, accuracy, or suitability of content for specific ministry contexts.
                Users assume full responsibility for how they apply learning from this platform.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">8. Changes to Terms</h3>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these terms as the platform evolves. Continued use of Axiom
                constitutes acceptance of any updated terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">9. Theological Position</h3>
              <p className="text-muted-foreground leading-relaxed">
                Axiom is rooted in historic Christian orthodoxy and the authority of Scripture. While we aim to
                serve believers across denominations, users should evaluate all content through the lens of their
                own church's theological framework and pastoral oversight.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
