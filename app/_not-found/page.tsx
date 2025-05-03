import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-16 text-center">
          <h1 className="text-6xl font-bold tracking-tighter text-white mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-slate-200 mb-4">Page Not Found</h2>
          <p className="text-xl text-slate-400 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Return Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}