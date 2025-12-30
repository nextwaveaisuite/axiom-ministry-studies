import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="container max-w-4xl">
        <h1 className="mb-8 text-center">Privacy Policy</h1>
        
        <Card className="shadow-lg border-border/50">
          <CardHeader>
            <CardTitle>How We Handle Your Information</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-6">
            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">1. Local Storage Only</h3>
              <p className="text-muted-foreground leading-relaxed">
                Axiom Ministry Studies stores all your personal information, intake data, and portfolio items
                locally on your device using browser localStorage. We do not transmit, collect, or store your
                personal information on external servers or databases.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">2. What Information is Stored Locally</h3>
              <p className="text-muted-foreground leading-relaxed">
                The following information is stored in your browser's localStorage:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your name, church/organization, and ministry role (from intake form)</li>
                <li>Ministry focus areas and learning preferences</li>
                <li>Portfolio items including reflections, sermon outlines, teaching plans, and notes</li>
                <li>Any additional notes or context you provide</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">3. Your Data Control</h3>
              <p className="text-muted-foreground leading-relaxed">
                You have complete control over your data. You can:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Export your portfolio data as JSON at any time</li>
                <li>Clear your browser's localStorage to delete all stored information</li>
                <li>Update or modify your intake information and portfolio items</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">4. No Third-Party Sharing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Because your data is stored locally on your device, we do not share, sell, or transmit your
                information to any third parties. Your ministry formation journey remains private and under
                your control.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">5. Browser Limitations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Please note that localStorage is specific to your browser and device. If you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Clear your browser data or cookies, your stored information will be deleted</li>
                <li>Use a different browser or device, your data will not be available</li>
                <li>Use private/incognito mode, your data may not persist after closing the browser</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We recommend regularly exporting your portfolio data as a backup.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">6. Analytics and Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                We do not use analytics, tracking cookies, or third-party services that collect personal information.
                The platform operates entirely within your browser.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">7. Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data security depends on your device and browser security. We recommend:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Using secure, updated browsers</li>
                <li>Protecting your device with passwords or biometric authentication</li>
                <li>Being cautious when using shared or public computers</li>
                <li>Regularly backing up your portfolio data through exports</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-serif font-semibold mb-3">8. Changes to Privacy Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                If we make changes to how data is handled, we will update this privacy policy and notify users
                through the platform. Continued use constitutes acceptance of any updates.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
