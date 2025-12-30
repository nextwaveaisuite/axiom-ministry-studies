import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Disclosure() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-4xl">
        <h1 className="mb-8 text-center">Important Disclosures</h1>
        
        <Card className="shadow-lg border-primary/30 bg-primary/5 mb-6">
          <CardContent className="py-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Critical Information for Users</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Please read these disclosures carefully before using Axiom Ministry Studies. Understanding
                  these limitations and requirements is essential for appropriate use of this platform.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-border/50">
          <CardHeader>
            <CardTitle>Platform Limitations and Requirements</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-6">
            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">1. Not Accredited Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Axiom Ministry Studies does not provide:</strong>
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Accredited theological degrees or diplomas</li>
                <li>Formal ministry credentials or certifications</li>
                <li>Ordination or licensing for ministry</li>
                <li>Academic credit transferable to educational institutions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                This platform is designed for personal formation and spiritual growth, not formal qualification.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">2. Human Oversight Required</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>All content and portfolio items must be reviewed by qualified spiritual leaders before
                being used in ministry contexts.</strong> This includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Sermon outlines and teaching plans</li>
                <li>Pastoral care approaches and counseling scenarios</li>
                <li>Ministry strategies and leadership decisions</li>
                <li>Theological reflections and interpretations</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Users should work under the oversight of their church leadership and seek mentoring from
                experienced ministry practitioners.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">3. Youth and Children's Ministry</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Special requirements apply for ministry to minors:</strong>
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Parental consent and oversight required for youth participants</li>
                <li>All content must be age-appropriate and reviewed by qualified adults</li>
                <li>Safeguarding policies must be followed according to local church and legal requirements</li>
                <li>Background checks and safety training may be required by your church or organization</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                See our Age Policy for complete details.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">4. Cultural Sensitivity and First Nations Ministry</h3>
              <p className="text-muted-foreground leading-relaxed">
                Module 6 (Cultural Wisdom & Discernment) addresses First Nations contexts specifically because:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Historical harm has been done through uninformed ministry approaches</li>
                <li>Cultural understanding is essential to avoid causing further damage</li>
                <li>Humility, listening, and learning must precede ministry action</li>
                <li>Indigenous voices and leadership should be centered and respected</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                This training is required for all users, not optional, to ensure faithful and respectful ministry.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">5. Theological Framework</h3>
              <p className="text-muted-foreground leading-relaxed">
                Axiom is rooted in historic Christian orthodoxy and the authority of Scripture. However:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Users remain responsible for theological discernment</li>
                <li>Content should be evaluated through your church's doctrinal framework</li>
                <li>Denominational differences exist and should be respected</li>
                <li>Pastoral oversight is essential for doctrinal accountability</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">6. Data Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Because all data is stored locally on your device:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You are responsible for backing up your portfolio data</li>
                <li>Data loss may occur if browser storage is cleared</li>
                <li>We cannot recover lost data stored only on your device</li>
                <li>Regular exports are recommended to prevent loss</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">7. Not a Replacement for Church Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Axiom is a tool for formation, not a replacement for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Local church membership and participation</li>
                <li>Face-to-face mentoring and discipleship relationships</li>
                <li>Accountability within a faith community</li>
                <li>The guidance of the Holy Spirit and prayer</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                This platform should complement, not substitute, your involvement in the Body of Christ.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">8. Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Axiom Ministry Studies is provided "as is" for personal formation. We are not liable for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Ministry outcomes or decisions based on platform content</li>
                <li>Theological disagreements or doctrinal disputes</li>
                <li>Data loss due to browser storage limitations</li>
                <li>Misuse of content without appropriate oversight</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">9. Acknowledgment</h3>
              <p className="text-muted-foreground leading-relaxed">
                By using Axiom Ministry Studies, you acknowledge that you have read and understood these
                disclosures and agree to use the platform responsibly under appropriate spiritual oversight.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
