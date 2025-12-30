import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import OnboardingTutorial from "./components/OnboardingTutorial";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Link } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useAuth } from "./_core/hooks/useAuth";
import { getLoginUrl } from "./const";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { trpc } from "@/lib/trpc";
import Home from "./pages/Home";
import Ministry from "./pages/Ministry";
import Intake from "./pages/Intake";
import Portfolio from "./pages/Portfolio";
import MensMinistry from "./pages/MensMinistry";
import WomensMinistry from "./pages/WomensMinistry";
import YouthMinistry from "./pages/YouthMinistry";
import TeachingMinistry from "./pages/TeachingMinistry";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclosure from "./pages/Disclosure";
import AgePolicy from "./pages/AgePolicy";
import MentorConnection from "./pages/MentorConnection";
import Admin from "./pages/Admin";
import Covenant from "./pages/Covenant";
import FamilyGuide from "./pages/FamilyGuide";
import PrayerWall from "./pages/PrayerWall";
import PrayerStats from "./pages/PrayerStats";
import PrayerPartners from "./pages/PrayerPartners";

// Men's Ministry Modules
import MensModule1 from "./pages/modules/MensModule1";
import MensModule2 from "./pages/modules/MensModule2";
import MensModule3 from "./pages/modules/MensModule3";
import MensModule4 from "./pages/modules/MensModule4";
import MensModule5 from "./pages/modules/MensModule5";
import MensModule6 from "./pages/modules/MensModule6";

// Women's Ministry Modules
import WomensModule1 from "./pages/modules/WomensModule1";
import WomensModule2 from "./pages/modules/WomensModule2";
import WomensModule3 from "./pages/modules/WomensModule3";
import WomensModule4 from "./pages/modules/WomensModule4";
import WomensModule5 from "./pages/modules/WomensModule5";
import WomensModule6 from "./pages/modules/WomensModule6";

// Youth Ministry Modules
import YouthModule1 from "./pages/modules/YouthModule1";
import YouthModule2 from "./pages/modules/YouthModule2";
import YouthModule3 from "./pages/modules/YouthModule3";
import YouthModule4 from "./pages/modules/YouthModule4";
import YouthModule5 from "./pages/modules/YouthModule5";
import YouthModule6 from "./pages/modules/YouthModule6";

// Teaching Ministry Modules
import TeachingModule1 from "./pages/modules/TeachingModule1";
import TeachingModule2 from "./pages/modules/TeachingModule2";
import TeachingModule3 from "./pages/modules/TeachingModule3";
import TeachingModule4 from "./pages/modules/TeachingModule4";
import TeachingModule5 from "./pages/modules/TeachingModule5";
import TeachingModule6 from "./pages/modules/TeachingModule6";

function Navigation() {
  const { user, isAuthenticated, loading } = useAuth();
  const logoutMutation = trpc.auth.logout.useMutation();

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    window.location.href = "/";
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-2xl font-serif font-semibold text-foreground hover:text-primary transition-colors">
              Axiom
            </a>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </a>
            </Link>
            <Link href="/ministry">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Ministry
              </a>
            </Link>
            {isAuthenticated && (
              <>
                <Link href="/intake">
                  <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Intake
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Portfolio
                  </a>
                </Link>
                <Link href="/mentor">
                  <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Mentor
                  </a>
                </Link>
                <Link href="/prayer">
                  <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Prayer Wall
                  </a>
                </Link>
                <Link href="/prayer-partners">
                  <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Prayer Partners
                  </a>
                </Link>
              </>
            )}
            {!loading && (
              <div className="ml-4">
                {isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {user?.name?.charAt(0)?.toUpperCase() || "U"}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium">{user?.name || "User"}</p>
                          <p className="text-xs text-muted-foreground">{user?.email}</p>
                        </div>
                      </div>
                      <DropdownMenuItem asChild>
                        <Link href="/prayer/stats">
                          <a className="flex items-center w-full cursor-pointer">
                            <User className="mr-2 h-4 w-4" />
                            Prayer Stats
                          </a>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button asChild variant="default" size="sm">
                    <a href={getLoginUrl()}>Sign In</a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 mt-auto">
      {/* Acknowledgement of Country */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container py-6">
          <p className="text-sm text-center text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            We acknowledge the Traditional Owners of Country throughout Australia and acknowledge their continuing connection to land, waters and community. We pay our respects to the people, the cultures and the Elders past and present.
          </p>
        </div>
      </div>
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-2xl font-serif font-semibold text-foreground mb-2">Axiom</p>
            <p className="text-sm text-muted-foreground">Ministry Studies & Formation</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/terms">
              <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
            </Link>
            <Link href="/privacy">
              <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
            </Link>
            <Link href="/disclosure">
              <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Disclosure
              </a>
            </Link>
            <Link href="/age-policy">
              <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Age Policy
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ministry" component={Ministry} />
      <Route path="/ministry/mens" component={MensMinistry} />
      <Route path="/ministry/womens" component={WomensMinistry} />
      <Route path="/ministry/youth" component={YouthMinistry} />
      <Route path="/ministry/teaching" component={TeachingMinistry} />
      
      {/* Men's Ministry Module Routes */}
      <Route path="/modules/mens/1" component={MensModule1} />
      <Route path="/modules/mens/2" component={MensModule2} />
      <Route path="/modules/mens/3" component={MensModule3} />
      <Route path="/modules/mens/4" component={MensModule4} />
      <Route path="/modules/mens/5" component={MensModule5} />
      <Route path="/modules/mens/6" component={MensModule6} />
      
      {/* Women's Ministry Module Routes */}
      <Route path="/modules/womens/1" component={WomensModule1} />
      <Route path="/modules/womens/2" component={WomensModule2} />
      <Route path="/modules/womens/3" component={WomensModule3} />
      <Route path="/modules/womens/4" component={WomensModule4} />
      <Route path="/modules/womens/5" component={WomensModule5} />
      <Route path="/modules/womens/6" component={WomensModule6} />
      
      {/* Youth Ministry Module Routes */}
      <Route path="/modules/youth/1" component={YouthModule1} />
      <Route path="/modules/youth/2" component={YouthModule2} />
      <Route path="/modules/youth/3" component={YouthModule3} />
      <Route path="/modules/youth/4" component={YouthModule4} />
      <Route path="/modules/youth/5" component={YouthModule5} />
      <Route path="/modules/youth/6" component={YouthModule6} />
      
      {/* Teaching Ministry Module Routes */}
      <Route path="/modules/teaching/1" component={TeachingModule1} />
      <Route path="/modules/teaching/2" component={TeachingModule2} />
      <Route path="/modules/teaching/3" component={TeachingModule3} />
      <Route path="/modules/teaching/4" component={TeachingModule4} />
      <Route path="/modules/teaching/5" component={TeachingModule5} />
      <Route path="/modules/teaching/6" component={TeachingModule6} />
      
      <Route path="/intake" component={Intake} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/mentor" component={MentorConnection} />
      <Route path="/prayer" component={PrayerWall} />
      <Route path="/prayer/stats" component={PrayerStats} />
      <Route path="/prayer-partners" component={PrayerPartners} />
      <Route path="/admin" component={Admin} />
      <Route path="/covenant" component={Covenant} />
      <Route path="/family-guide" component={FamilyGuide} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/disclosure" component={Disclosure} />
      <Route path="/age-policy" component={AgePolicy} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
          <OnboardingTutorial />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
