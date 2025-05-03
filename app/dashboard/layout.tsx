import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { DashboardHeader } from "@/app/dashboard/header"
import { DashboardSidebar } from "@/app/dashboard/sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen bg-slate-950">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}