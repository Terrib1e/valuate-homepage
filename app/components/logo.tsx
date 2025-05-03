import { Building2 } from 'lucide-react'
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Building2 className="h-6 w-6 text-blue-500" />
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400">
        Valuate
      </span>
    </Link>
  )
}