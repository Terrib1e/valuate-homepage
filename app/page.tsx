import Link from "next/link"
import { Building2, BarChart3, Brain, Clock, Shield, ChevronRight, Database, LineChart, ArrowRight } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400">
              Valuate
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              className="hidden md:flex border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Log in
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
            <div className="grid grid-cols-6 h-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-r border-slate-800/50"></div>
              ))}
            </div>
            <div className="grid grid-rows-6 w-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-b border-slate-800/50"></div>
              ))}
            </div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-1 rounded-full bg-blue-950/60 px-3 py-1 text-sm font-medium text-blue-400 mb-4 w-fit border border-blue-800/50">
                  <span>AI-Powered Property Valuation</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl text-white">
                    Smarter Hotel Acquisition Decisions
                  </h1>
                  <p className="max-w-[600px] text-slate-400 md:text-xl">
                    Make confident investment decisions with our advanced AI that analyzes market data, property
                    metrics, and future potential to determine if a hotel is worth acquiring.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0">Request Demo</Button>
                  <Button
                    variant="default"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4 fill-current text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>99% Accuracy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4 fill-current text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>14-Day Free Trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4 fill-current text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>No Credit Card Required</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 mix-blend-overlay"></div>
                  <img
                    src="/placeholder.svg?height=500&width=800"
                    alt="Valuate dashboard showing hotel valuation metrics"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-xs font-medium mb-1 opacity-80 text-blue-400">AI-POWERED ANALYSIS</div>
                    <div className="text-xl font-bold mb-2">Hotel Acquisition Dashboard</div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-slate-300">Live market data</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-slate-900 border-y border-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight text-slate-300">
                  Trusted by leading hotel investment firms
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-70">
                <div className="flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=120" alt="Marriott" className="h-8 md:h-10 invert" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=120" alt="Hilton" className="h-8 md:h-10 invert" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=120" alt="Hyatt" className="h-8 md:h-10 invert" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=120" alt="IHG" className="h-8 md:h-10 invert" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=120" alt="Wyndham" className="h-8 md:h-10 invert" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-1 rounded-full bg-blue-950/60 px-3 py-1 text-sm font-medium text-blue-400 mb-2 border border-blue-800/50">
                <span>Features</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Make Smarter Hotel Investments
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform analyzes hundreds of factors to provide accurate valuations and investment
                  recommendations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="bg-slate-900 border border-slate-800 shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-blue-950/50 w-fit mb-2 group-hover:bg-blue-900/50 transition-colors border border-blue-800/50">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Market Analysis</CardTitle>
                  <CardDescription className="text-slate-400">
                    Comprehensive analysis of local market conditions, competition, and trends.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">
                    Our AI analyzes historical and current market data to predict future performance and identify
                    opportunities others might miss.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link
                    href="#"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-slate-900 border border-slate-800 shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-blue-950/50 w-fit mb-2 group-hover:bg-blue-900/50 transition-colors border border-blue-800/50">
                    <Brain className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">AI Valuation</CardTitle>
                  <CardDescription className="text-slate-400">
                    Advanced algorithms that determine the true value of a property.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">
                    Our proprietary AI model considers over 200 factors to provide accurate valuations that traditional
                    methods can&apos;t match.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link
                    href="#"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-slate-900 border border-slate-800 shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-blue-950/50 w-fit mb-2 group-hover:bg-blue-900/50 transition-colors border border-blue-800/50">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Real-Time Updates</CardTitle>
                  <CardDescription className="text-slate-400">
                    Continuous monitoring and valuation adjustments as market conditions change.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">
                    Stay ahead of the market with real-time updates and alerts when property valuations change
                    significantly.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link
                    href="#"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-slate-900 border border-slate-800 shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-blue-950/50 w-fit mb-2 group-hover:bg-blue-900/50 transition-colors border border-blue-800/50">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Risk Assessment</CardTitle>
                  <CardDescription className="text-slate-400">
                    Detailed risk analysis for each potential acquisition.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">
                    Identify potential risks and challenges before they become problems with our comprehensive risk
                    assessment tools.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link
                    href="#"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-slate-900 border border-slate-800 shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-blue-950/50 w-fit mb-2 group-hover:bg-blue-900/50 transition-colors border border-blue-800/50">
                    <Database className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Detailed Reports</CardTitle>
                  <CardDescription className="text-slate-400">
                    Comprehensive reports with actionable insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">
                    Get detailed reports that break down every aspect of the valuation, making it easy to understand and
                    present to stakeholders.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link
                    href="#"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-slate-900 border border-slate-800 shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-blue-950/50 w-fit mb-2 group-hover:bg-blue-900/50 transition-colors border border-blue-800/50">
                    <LineChart className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">ROI Forecasting</CardTitle>
                  <CardDescription className="text-slate-400">
                    Accurate predictions of return on investment over time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">
                    Our AI forecasts potential ROI under various scenarios, helping you make informed investment
                    decisions with confidence.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link
                    href="#"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-1 rounded-full bg-blue-950/60 px-3 py-1 text-sm font-medium text-blue-400 mb-2 border border-blue-800/50">
                <span>Process</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  How Valuate Works
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined process makes hotel valuation faster, more accurate, and easier than ever before.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 text-center relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white">Input Property Details</h3>
                <p className="text-sm text-slate-400">
                  Enter basic information about the hotel property you&apos;re considering, including location, size, and
                  current performance metrics.
                </p>
                <div className="absolute top-24 right-0 hidden md:block w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white">AI Analysis</h3>
                <p className="text-sm text-slate-400">
                  Our AI analyzes the property against market data, comparable properties, and hundreds of other factors
                  to determine its true value.
                </p>
                <div className="absolute top-24 right-0 hidden md:block w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white">Get Comprehensive Results</h3>
                <p className="text-sm text-slate-400">
                  Receive a detailed valuation report with actionable insights, risk assessment, and ROI projections to
                  guide your investment decision.
                </p>
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 mix-blend-overlay"></div>
                <img
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Valuate platform interface showing valuation process"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-400 ml-4">Valuate AI Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-1 rounded-full bg-blue-950/60 px-3 py-1 text-sm font-medium text-blue-400 mb-2 border border-blue-800/50">
                <span>Testimonials</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from hotel investment professionals who have transformed their acquisition strategy with Valuate.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="bg-slate-800 border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=60&width=60"
                        alt="Sarah Johnson"
                        className="rounded-full h-12 w-12 object-cover border-2 border-blue-900"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">Sarah Johnson</CardTitle>
                      <CardDescription className="text-slate-400">VP of Acquisitions, Horizon Hotels</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">
                    <span className="font-bold">Valuate has completely transformed our acquisition process.</span> We&apos;ve increased our portfolio by 30%
                    while reducing our risk exposure. The AI valuation has been spot-on for every property we&apos;ve
                    acquired.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=60&width=60"
                        alt="Michael Chen"
                        className="rounded-full h-12 w-12 object-cover border-2 border-blue-900"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">Michael Chen</CardTitle>
                      <CardDescription className="text-slate-400">Director, Pacific Investment Group</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">
                    <span className="font-bold">The detailed risk assessment saved us from making a $12M mistake on a property that looked great on
                    paper but had serious underlying issues that only Valuate&apos;s AI was able to identify.</span>
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=60&width=60"
                        alt="Emma Rodriguez"
                        className="rounded-full h-12 w-12 object-cover border-2 border-blue-900"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">Emma Rodriguez</CardTitle>
                      <CardDescription className="text-slate-400">CEO, Boutique Hospitality Ventures</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">
                    <span className="font-bold">As a smaller investment firm, we don&apos;t have the resources for extensive market research. Valuate
                    levels the playing field, giving us the same insights as the industry giants at a fraction of the
                    cost.</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-1 rounded-full bg-blue-950/60 px-3 py-1 text-sm font-medium text-blue-400 mb-2 border border-blue-800/50">
                <span>Pricing</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your investment strategy and portfolio size.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <Card className="bg-slate-900 border border-slate-800 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-white">Starter</CardTitle>
                  <div className="text-3xl font-bold text-white">
                    $499<span className="text-sm font-normal text-slate-400">/month</span>
                  </div>
                  <CardDescription className="text-slate-400">
                    Perfect for small investment firms or individual investors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Up to 5 property valuations per month
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Basic market analysis
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Standard valuation reports
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="bg-slate-900 border border-blue-800 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Professional</CardTitle>
                  <div className="text-3xl font-bold text-white">
                    $999<span className="text-sm font-normal text-slate-400">/month</span>
                  </div>
                  <CardDescription className="text-slate-400">
                    Ideal for mid-sized investment firms with regular acquisition activity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Up to 20 property valuations per month
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Advanced market analysis
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Comprehensive valuation reports
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Risk assessment tools
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Priority email & phone support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="bg-slate-900 border border-slate-800 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-white">Enterprise</CardTitle>
                  <div className="text-3xl font-bold text-white">
                    Custom<span className="text-sm font-normal text-slate-400"> pricing</span>
                  </div>
                  <CardDescription className="text-slate-400">
                    For large investment firms with high-volume acquisition strategies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Unlimited property valuations
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Premium market analysis & forecasting
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Custom API integration
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Dedicated account manager
                    </li>
                    <li className="flex items-center text-slate-300">
                      <svg
                        className="mr-2 h-4 w-4 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      24/7 priority support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-1 rounded-full bg-blue-950/60 px-3 py-1 text-sm font-medium text-blue-400 mb-2 border border-blue-800/50">
                <span>FAQ</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about Valuate and our AI-powered hotel valuation platform.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 mt-12">
              <Card className="bg-slate-800 border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-white">How accurate is Valuate&apos;s AI valuation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">
                    Our AI valuation has been proven to be 95-99% accurate when compared to actual transaction prices.
                    We continuously train our models on the latest market data to ensure the highest possible accuracy.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-white">What data does Valuate use for its analysis?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">
                    Valuate analyzes a wide range of data sources, including historical property transactions, current
                    market conditions, local economic indicators, tourism trends, competitive landscape,
                    property-specific metrics, and more. Our AI considers over 200 factors in its valuation process.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-white">How long does it take to get a valuation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">
                    Basic valuations are typically completed within minutes. More comprehensive analyses that include
                    detailed market research and risk assessments may take up to 24 hours, depending on the complexity
                    of the property and market.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-white">Can Valuate integrate with our existing systems?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">
                    Yes, our Enterprise plan includes API access and custom integrations with your existing property
                    management, CRM, or investment analysis systems. Our team will work with you to ensure seamless
                    integration.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-white">Is my data secure with Valuate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">
                    Absolutely. We take data security very seriously. All data is encrypted both in transit and at rest.
                    We comply with industry-standard security protocols and regularly undergo security audits to ensure
                    your sensitive investment data remains protected.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Hotel Investment Strategy?
                </h2>
                <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of successful hotel investors who are making smarter acquisition decisions with Valuate.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-blue-900 hover:bg-slate-100">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" className="text-white border-white hover:bg-blue-800/20">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400">
                Valuate
              </span>
            </div>
            <p className="text-sm text-slate-400">
              AI-powered hotel valuation platform that helps investors make smarter acquisition decisions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-blue-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-white">Product</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-400">
                <li>
                  <Link href="#features" className="hover:text-blue-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-blue-400">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-blue-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-white">Resources</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-white">Legal</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 py-6">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
            <p className="text-xs text-slate-400">© 2025 Valuate. All rights reserved.</p>
            <p className="text-xs text-slate-400">
              Made with <span className="text-blue-500">♥</span> for smarter hotel investments
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
