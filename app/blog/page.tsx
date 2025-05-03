import Link from "next/link"
import Image from "next/image"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: "1",
    title: "The Future of AI in Hotel Valuation",
    excerpt: "How artificial intelligence is revolutionizing the way investors value hotel properties and make acquisition decisions.",
    date: "May 15, 2023",
    author: "Sarah Johnson",
    category: "Technology",
    image: "/images/blog/ai-valuation.jpg",
    slug: "future-of-ai-in-hotel-valuation"
  },
  {
    id: "2",
    title: "5 Key Metrics Every Hotel Investor Should Track",
    excerpt: "A deep dive into the most important performance indicators that can make or break your hotel investment.",
    date: "April 28, 2023",
    author: "Michael Chen",
    category: "Investment",
    image: "/images/blog/metrics.jpg",
    slug: "key-metrics-hotel-investors"
  },
  {
    id: "3",
    title: "Post-Pandemic Hotel Recovery: Market Analysis",
    excerpt: "An analysis of recovery patterns across different hotel segments and geographic markets since the pandemic.",
    date: "March 12, 2023",
    author: "Emma Rodriguez",
    category: "Market Research",
    image: "/images/blog/recovery.jpg",
    slug: "post-pandemic-hotel-recovery"
  },
  {
    id: "4",
    title: "How to Spot Undervalued Hotel Properties",
    excerpt: "Expert tips on identifying hotel properties with hidden potential that others might miss.",
    date: "February 5, 2023",
    author: "David Kim",
    category: "Investment",
    image: "/images/blog/undervalued.jpg",
    slug: "spot-undervalued-hotel-properties"
  },
  {
    id: "5",
    title: "The Impact of ESG on Hotel Valuations",
    excerpt: "How environmental, social, and governance factors are increasingly affecting hotel property values.",
    date: "January 20, 2023",
    author: "Sarah Johnson",
    category: "Trends",
    image: "/images/blog/esg.jpg",
    slug: "impact-of-esg-on-hotel-valuations"
  },
  {
    id: "6",
    title: "AI vs. Traditional Appraisals: A Comparative Study",
    excerpt: "We compared AI-powered valuations against traditional appraisal methods. The results might surprise you.",
    date: "December 8, 2022",
    author: "Michael Chen",
    category: "Research",
    image: "/images/blog/comparison.jpg",
    slug: "ai-vs-traditional-appraisals"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden bg-slate-950">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                Valuate Blog
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Insights, research, and trends in hotel investment and valuation
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-slate-900">
          <div className="container px-4 md:px-6">
            <Link href={`/blog/${blogPosts[0].slug}`} className="block group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-400 mb-2">{blogPosts[0].category}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-slate-400 mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-slate-500">
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>By {blogPosts[0].author}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full bg-slate-900 border border-slate-800 overflow-hidden hover:border-blue-800 transition-colors">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="text-sm font-medium text-blue-400 mb-1">{post.category}</div>
                      <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="text-slate-400">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <div className="flex items-center text-xs text-slate-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>By {post.author}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-slate-400 mb-6">
                Get the latest insights on hotel investment and valuation delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}