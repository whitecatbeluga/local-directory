"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import CustomCard from "@/components/custom-ui/custom-card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Sample list of businesses
const businesses = [
  { id: 1, title: "Down Town Coffee" },
  { id: 2, title: "Garden Cafe" },
  { id: 3, title: "Sunrise Bakery" },
  { id: 4, title: "Moonlight Restaurant" },
]

export default function Page() {
  const [search, setSearch] = useState("")

  // Filter businesses based on search input
  const filteredBusinesses = businesses.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Business list</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>1 / 20</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="p-4 pt-2 flex flex-wrap items-center gap-2">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search businesses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[200px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Search Button */}
          <button
            onClick={() => console.log("Search for:", search)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>

          {/* Optional: Add New Business Button */}
          <button
            onClick={() => console.log("Add new business")}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Add Business
          </button>
        </div>


        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 pt-0 overflow-auto">
          {filteredBusinesses.map((b) => (
            <CustomCard key={b.id} title={b.title} />
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

