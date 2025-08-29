"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Sample teams (optional)
const teams = [
  { name: "Acme Inc", logo: "", plan: "Enterprise" },
  { name: "Acme Corp.", logo: "", plan: "Startup" },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-gray-800">
        <h2 className="text-lg font-semibold text-white px-4 py-3">
          Business Finder
        </h2>
      </SidebarHeader>

      <SidebarContent>
        <div className="px-4 py-2">
          <h3 className="text-gray-700 font-semibold mb-2">Filters</h3>

          {/* Location */}
          <div className="mb-4">
            <p className="text-gray-500 font-medium mb-1">Location</p>
            <select className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Areas</option>
            </select>
          </div>

          {/* Distance */}
          <div className="mb-4">
            <p className="text-gray-500 font-medium mb-1">Distance</p>
            <select className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Within 25 miles</option>
            </select>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <p className="text-gray-500 font-medium mb-1">Rating</p>
            <div className="flex flex-col gap-1">
              <label className="text-sm">
                <input type="checkbox" className="mr-2" /> 4+ Stars
              </label>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-4">
            <p className="text-gray-500 font-medium mb-1">Categories</p>
            <div className="flex flex-col gap-1 text-sm">
              <label>
                <input type="checkbox" className="mr-2" /> All Categories
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Restaurants
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Healthcare
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Auto Services
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Home Services
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Beauty & Spa
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Shopping
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Professional Services
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Entertainment
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Education
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Real Estate
              </label>
            </div>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter>
        <p className="text-gray-400 text-sm p-4">Filtered by location & categories</p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

