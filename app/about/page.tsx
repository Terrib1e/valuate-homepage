import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden bg-slate-950">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                About Valuate
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                We&apos;re on a mission to transform hotel investment with AI-powered valuation technology.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
                <p className="text-slate-400 mb-4">
                  Valuate was founded in 2020 by a team of hotel industry veterans and AI experts who recognized a
                  fundamental problem in hotel acquisitions: traditional valuation methods were slow, inconsistent,
                  and often inaccurate.
                </p>
                <p className="text-slate-400 mb-4">
                  After experiencing firsthand the challenges of hotel valuation during the market volatility of
                  2020, our founders set out to build a solution that would bring data-driven precision to hotel
                  investment decisions.
                </p>
                <p className="text-slate-400">
                  Today, Valuate is trusted by leading hotel investment firms across the globe, helping them make
                  smarter acquisition decisions with our AI-powered valuation platform.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden border border-slate-800">
                  <Image
                    src="/images/about/team.jpg"
                    alt="Valuate founding team"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-slate-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border border-slate-800">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                  <p className="text-slate-400">
                    We believe in transparent, honest valuations that investors can trust. Our algorithms are
                    designed to provide unbiased assessments based purely on data.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border border-slate-800">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                  <p className="text-slate-400">
                    We&apos;re constantly pushing the boundaries of what&apos;s possible with AI in real estate
                    valuation, investing heavily in R&D to stay at the cutting edge.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border border-slate-800">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Partnership</h3>
                  <p className="text-slate-400">
                    We see ourselves as partners in our clients&apos; success, not just a service provider. Your
                    wins are our wins, and we&apos;re committed to your long-term growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-slate-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO & Co-Founder",
                  bio: "Former VP of Acquisitions at Marriott with 15+ years of hotel investment experience.",
                  image: "/images/team/ceo.jpg"
                },
                {
                  name: "Michael Chen",
                  role: "CTO & Co-Founder",
                  bio: "AI researcher and engineer with previous experience at Google and Stanford AI Lab.",
                  image: "/images/team/cto.jpg"
                },
                {
                  name: "Emma Rodriguez",
                  role: "Chief Data Officer",
                  bio: "Data scientist specializing in real estate analytics and predictive modeling.",
                  image: "/images/team/cdo.jpg"
                },
                {
                  name: "David Kim",
                  role: "Chief Revenue Officer",
                  bio: "20+ years in SaaS sales leadership with expertise in proptech and fintech.",
                  image: "/images/team/cro.jpg"
                }
              ].map((member, index) => (
                <Card key={index} className="bg-slate-900 border border-slate-800 overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                    <p className="text-slate-400 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
              <p className="text-xl text-slate-300 mb-8">
                We&apos;re looking for passionate people to help us transform the future of hotel investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-900 hover:bg-slate-100">
                  View Open Positions
                </Button>
                <Button variant="ghost" className="text-white border-white hover:bg-blue-800/20">
                  Contact Us
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