import Link from "next/link"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r border-slate-800 bg-slate-900 p-6">
          <nav className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">Getting Started</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-blue-400 hover:text-blue-300 font-medium">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="/docs/quickstart" className="text-slate-300 hover:text-blue-300">
                    Quick Start Guide
                  </Link>
                </li>
                <li>
                  <Link href="/docs/concepts" className="text-slate-300 hover:text-blue-300">
                    Key Concepts
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">Using the Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs/dashboard" className="text-slate-300 hover:text-blue-300">
                    Dashboard Overview
                  </Link>
                </li>
                <li>
                  <Link href="/docs/property-analysis" className="text-slate-300 hover:text-blue-300">
                    Property Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/docs/market-insights" className="text-slate-300 hover:text-blue-300">
                    Market Insights
                  </Link>
                </li>
                <li>
                  <Link href="/docs/reports" className="text-slate-300 hover:text-blue-300">
                    Reports & Exports
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">API Reference</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs/api/authentication" className="text-slate-300 hover:text-blue-300">
                    Authentication
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api/properties" className="text-slate-300 hover:text-blue-300">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api/valuations" className="text-slate-300 hover:text-blue-300">
                    Valuations
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api/markets" className="text-slate-300 hover:text-blue-300">
                    Markets
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">Introduction to Valuate</h1>
              <p className="text-slate-400">
                Welcome to the Valuate documentation. This guide will help you get started with our AI-powered
                hotel valuation platform and show you how to make the most of its features.
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2>What is Valuate?</h2>
              <p>
                Valuate is an AI-powered platform designed specifically for hotel investors, acquisition teams,
                and asset managers. Our platform analyzes hundreds of factors to provide accurate valuations and
                investment recommendations for hotel properties.
              </p>

              <h2>Key Features</h2>
              <ul>
                <li>
                  <strong>AI Valuation:</strong> Get accurate, data-driven valuations for hotel properties in minutes.
                </li>
                <li>
                  <strong>Market Analysis:</strong> Comprehensive analysis of local market conditions, competition, and trends.
                </li>
                <li>
                  <strong>Risk Assessment:</strong> Detailed risk analysis for each potential acquisition.
                </li>
                <li>
                  <strong>ROI Forecasting:</strong> Accurate predictions of return on investment over time.
                </li>
                <li>
                  <strong>Real-Time Updates:</strong> Continuous monitoring and valuation adjustments as market conditions change.
                </li>
              </ul>

              <h2>Getting Started</h2>
              <p>
                To get started with Valuate, follow these steps:
              </p>
              <ol>
                <li>
                  <Link href="/signup" className="text-blue-400 hover:text-blue-300">Sign up</Link> for a Valuate account or{" "}
                  <Link href="/login" className="text-blue-400 hover:text-blue-300">log in</Link> if you already have one.
                </li>
                <li>
                  Complete your company profile to help us tailor the experience to your needs.
                </li>
                <li>
                  Add your first property for valuation by entering basic information about the hotel.
                </li>
                <li>
                  Review the AI-generated valuation and detailed analysis.
                </li>
                <li>
                  Explore market insights and comparable properties to gain a deeper understanding.
                </li>
              </ol>

              <h2>System Requirements</h2>
              <p>
                Valuate is a web-based platform that works on any modern browser. For the best experience, we recommend:
              </p>
              <ul>
                <li>Google Chrome (latest version)</li>
                <li>Mozilla Firefox (latest version)</li>
                <li>Microsoft Edge (latest version)</li>
                <li>Safari (latest version)</li>
              </ul>

              <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 my-6">
                <h3 className="text-white font-medium mb-2">Need Help?</h3>
                <p className="text-slate-300 mb-0">
                  If you have any questions or need assistance, our support team is available 24/7.{" "}
                  <Link href="/contact" className="text-blue-400 hover:text-blue-300">Contact us</Link> or check out our{" "}
                  <Link href="/faq" className="text-blue-400 hover:text-blue-300">FAQ</Link> for quick answers.
                </p>
              </div>

              <h2>Next Steps</h2>
              <p>
                Ready to dive deeper? Check out these resources:
              </p>
              <ul>
                <li>
                  <Link href="/docs/quickstart" className="text-blue-400 hover:text-blue-300">Quick Start Guide</Link> - A step-by-step tutorial for new users
                </li>
                <li>
                  <Link href="/docs/concepts" className="text-blue-400 hover:text-blue-300">Key Concepts</Link> - Learn about the fundamental concepts behind Valuate
                </li>
                <li>
                  <Link href="/docs/api" className="text-blue-400 hover:text-blue-300">API Documentation</Link> - Integrate Valuate with your existing systems
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}