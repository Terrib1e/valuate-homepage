"use client"

import Link from "next/link"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Valuate
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-slate-300 hover:text-white">
            Features
          </Link>
          <Link href="/pricing" className="text-slate-300 hover:text-white">
            Pricing
          </Link>
          <Link href="/docs" className="text-slate-300 hover:text-white">
            Documentation
          </Link>
          <Link href="/blog" className="text-slate-300 hover:text-white">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-slate-300">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}