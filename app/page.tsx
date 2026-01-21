import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Heart, 
  Moon, 
  Activity, 
  Brain, 
  Baby, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  Shield
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 py-24 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container relative px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>FSA or HSA eligible</span>
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
                Make this year your{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  healthiest yet
                </span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                For 2026, make the choice that can lead to a longer, healthier life with SIG Ring.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Features
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 md:py-32">
          <div className="container px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Membership gives your body <span className="italic">a voice</span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Moon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Sleep and Rest</CardTitle>
                  <CardDescription>
                    Get the best sleep of <span className="italic">your life</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced sleep tracking with personalized insights to optimize your rest and recovery.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Wellness and Longevity</CardTitle>
                  <CardDescription>
                    Don't just live longer, <span className="italic">live healthier</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive health metrics to guide your wellness journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Activity and Fitness</CardTitle>
                  <CardDescription>
                    Bring your fitness goals <span className="italic">into focus</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Track your workouts and activity levels with precision.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Heart Health</CardTitle>
                  <CardDescription>
                    Listen to what your heart is <span className="italic">telling you</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Continuous heart rate monitoring and HRV analysis for cardiovascular insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Baby className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Women's Health</CardTitle>
                  <CardDescription>
                    Understand the ins and outs of <span className="italic">women's health</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Specialized tracking for menstrual cycles, pregnancy, and perimenopause.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Stress</CardTitle>
                  <CardDescription>
                    Put your stress to <span className="italic">the test</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Real-time stress monitoring with actionable recommendations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Meets Function Section */}
        <section className="bg-muted/30 py-24 md:py-32">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                FORM MEETS FUNCTION
              </h2>
              <h3 className="mb-8 text-xl text-muted-foreground md:text-2xl">
                Built for accuracy, designed for <span className="italic">your every day</span>
              </h3>
              <p className="mb-12 text-lg text-muted-foreground">
                Comfortably wear SIGNUM Ring all day and night to collect deeply personal health metrics and insights. 
                Your finger provides the most accurate reading of over 20 biometrics that directly impact how you feel.
              </p>
              <Button size="lg" variant="outline">
                How It Works
              </Button>
            </div>
          </div>
        </section>

        {/* Technology Highlights */}
        <section className="py-24 md:py-32">
          <div className="container px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Advanced Sensors</h3>
                <p className="text-muted-foreground">
                  Multi-modal physiological sensors for comprehensive health monitoring
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">AI-Powered Insights</h3>
                <p className="text-muted-foreground">
                  Machine learning algorithms provide personalized health recommendations
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your health data is encrypted and stored securely with full control
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="bg-muted/30 py-24 md:py-32">
          <div className="container px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">IN THE NEWS</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 text-xs text-muted-foreground">FEATURED ARTICLE</div>
                  <CardTitle className="group-hover:text-primary">
                    Fast Company: SIGNUM Ring now comes in 4 new colors to match your mood
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary">
                    Forbes: SIGNUM Reveals Cutting-Edge New Health Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary">
                    TIME: How SIGNUM Keeps Pushing Smart Ring Tech Forward
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to start your health journey?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join thousands of users who are taking control of their health with SIGNUM Ring.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
