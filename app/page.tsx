import type { Metadata } from "next";
import { prisma } from '@/lib/prisma'

// SEO metadata for this page
export const metadata: Metadata = {
  title: "Local Directory",
  description: "Sample local directory homepage",
};

// Page component
export default async function Home() {
  const business = await prisma.business.findMany({
    include: { category: true, owner: true }
  })
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Local Directory</h1>
      <p>Welcome to the sample directory site!</p>
    </main>
  );
}

