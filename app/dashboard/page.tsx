import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Building2, TrendingUp, TrendingDown, AlertTriangle, Plus } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-400">Total Properties</CardDescription>
            <CardTitle className="text-2xl text-white">12</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium text-green-500 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+2 this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-400">Average Valuation</CardDescription>
            <CardTitle className="text-2xl text-white">$8.2M</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium text-green-500 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+5.3% from last quarter</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-400">Potential ROI</CardDescription>
            <CardTitle className="text-2xl text-white">14.8%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium text-red-500 flex items-center">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span>-1.2% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-400">Risk Score</CardDescription>
            <CardTitle className="text-2xl text-white">Medium</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium text-yellow-500 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" />
              <span>2 properties need attention</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="bg-slate-900 border-slate-800 md:col-span-4">
          <CardHeader>
            <CardTitle className="text-white">Recent Valuations</CardTitle>
            <CardDescription className="text-slate-400">
              Your most recent property valuations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Oceanview Resort",
                  location: "Miami, FL",
                  valuation: "$12.4M",
                  change: "+3.2%",
                  positive: true,
                },
                {
                  name: "Mountain Lodge",
                  location: "Aspen, CO",
                  valuation: "$8.7M",
                  change: "+1.5%",
                  positive: true,
                },
                {
                  name: "Downtown Boutique",
                  location: "Chicago, IL",
                  valuation: "$5.2M",
                  change: "-2.1%",
                  positive: false,
                },
                {
                  name: "Harbor View Inn",
                  location: "Seattle, WA",
                  valuation: "$7.9M",
                  change: "+4.7%",
                  positive: true,
                },
              ].map((property, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-800 border border-slate-700"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-md bg-blue-900/30 text-blue-400">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{property.name}</div>
                      <div className="text-sm text-slate-400">{property.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">{property.valuation}</div>
                    <div
                      className={`text-sm ${property.positive ? "text-green-500" : "text-red-500"
                        }`}
                    >
                      {property.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800 md:col-span-3">
          <CardHeader>
            <CardTitle className="text-white">Market Insights</CardTitle>
            <CardDescription className="text-slate-400">
              Current trends in your target markets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  market: "Miami, FL",
                  trend: "Rising",
                  value: "+8.3%",
                  positive: true,
                },
                {
                  market: "Aspen, CO",
                  trend: "Stable",
                  value: "+1.2%",
                  positive: true,
                },
                {
                  market: "Chicago, IL",
                  trend: "Declining",
                  value: "-3.5%",
                  positive: false,
                },
                {
                  market: "Seattle, WA",
                  trend: "Rising",
                  value: "+5.7%",
                  positive: true,
                },
              ].map((market, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-800 border border-slate-700"
                >
                  <div>
                    <div className="font-medium text-white">{market.market}</div>
                    <div className="text-sm text-slate-400">{market.trend}</div>
                  </div>
                  <div
                    className={`text-sm font-medium ${market.positive ? "text-green-500" : "text-red-500"
                      }`}
                  >
                    {market.value}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}