import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function AgePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-4xl">
        <h1 className="mb-8 text-center">Age Policy</h1>
        
        <Card className="shadow-lg border-primary/30 bg-primary/5 mb-6">
          <CardContent className="py-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Protecting Children and Youth in Ministry</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Axiom Ministry Studies is committed to the safety and appropriate spiritual formation of
                  children and youth. This policy outlines requirements for ministry to minors.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-border/50">
          <CardHeader>
            <CardTitle>Age Requirements and Safeguarding</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-6">
            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">1. Platform Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                Axiom Ministry Studies is designed for adult learners (18 years and older) who are:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Exploring or engaged in ministry roles</li>
                <li>Seeking personal spiritual formation and growth</li>
                <li>Preparing for leadership or teaching responsibilities</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Youth aged 16-17 may access the platform with parental consent and appropriate mentor oversight.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">2. Youth Ministry Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>When creating content for ministry to children or youth, users must:</strong>
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Ensure all content is age-appropriate and developmentally suitable</li>
                <li>Have content reviewed by qualified youth ministry leaders or pastors</li>
                <li>Follow their church's safeguarding and child protection policies</li>
                <li>Obtain parental consent before implementing teaching plans or activities</li>
                <li>Never use content that could be harmful, manipulative, or inappropriate</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">3. Parental and Mentor Oversight</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Youth participants (ages 16-17) require:</strong>
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Written parental or guardian consent to use the platform</li>
                <li>Active involvement of a qualified mentor, pastor, or youth leader</li>
                <li>Regular review of portfolio content by their mentor</li>
                <li>Appropriate boundaries and accountability structures</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Parents and mentors should have access to all content created by youth participants.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">4. Safeguarding Requirements</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>All users engaged in ministry to children or youth must:</strong>
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Complete required background checks as mandated by their church or organization</li>
                <li>Undergo safeguarding training appropriate to their ministry context</li>
                <li>Follow two-adult rule and other safety protocols</li>
                <li>Report any concerns about child safety to appropriate authorities</li>
                <li>Maintain appropriate boundaries with minors at all times</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Axiom does not verify safeguarding compliance—this remains the responsibility of local churches
                and organizations.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">5. Age-Appropriate Content Guidelines</h3>
              <p className="text-muted-foreground leading-relaxed">
                When developing teaching plans or materials for different age groups:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Children (under 12):</strong> Simple biblical stories, concrete concepts, active learning, parental involvement required</li>
                <li><strong>Early teens (12-14):</strong> Identity formation, peer relationships, foundational doctrine, mentor guidance essential</li>
                <li><strong>Older teens (15-17):</strong> Worldview development, apologetics, calling exploration, leadership preparation with oversight</li>
                <li><strong>Young adults (18-25):</strong> Deeper theology, ministry training, life transitions, accountability partnerships</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">6. Prohibited Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>The following content is strictly prohibited:</strong>
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Any content that could harm, manipulate, or exploit children or youth</li>
                <li>Inappropriate physical, emotional, or spiritual boundary violations</li>
                <li>Content that bypasses parental authority or undermines family relationships</li>
                <li>Materials that are developmentally inappropriate or psychologically harmful</li>
                <li>Any form of spiritual abuse or coercive control tactics</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">7. Reporting Concerns</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you become aware of:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Child abuse or neglect</li>
                <li>Inappropriate ministry practices involving minors</li>
                <li>Safeguarding policy violations</li>
                <li>Concerning behavior toward children or youth</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You must report immediately to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your church leadership or safeguarding officer</li>
                <li>Local child protection authorities as required by law</li>
                <li>Law enforcement if a crime has occurred or is suspected</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">8. Legal Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for compliance with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Local and national child protection laws</li>
                <li>Mandatory reporting requirements in their jurisdiction</li>
                <li>Church denominational safeguarding policies</li>
                <li>Organizational codes of conduct and ethics</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Axiom provides formation resources but does not replace legal or organizational safeguarding
                requirements.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">9. Platform Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Axiom Ministry Studies:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provides guidelines and educational content on safe ministry practices</li>
                <li>Emphasizes the importance of safeguarding in all ministry contexts</li>
                <li>Requires acknowledgment of these policies before accessing youth ministry content</li>
                <li>Does not verify individual compliance with safeguarding requirements</li>
                <li>Is not liable for misuse of content or safeguarding violations by users</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">10. Acknowledgment</h3>
              <p className="text-muted-foreground leading-relaxed">
                By using Axiom Ministry Studies, especially for youth ministry content, you acknowledge:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You have read and understood this Age Policy</li>
                <li>You will comply with all safeguarding requirements</li>
                <li>You will seek appropriate oversight and accountability</li>
                <li>You will prioritize the safety and wellbeing of children and youth above all else</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
