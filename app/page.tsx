import type { Metadata } from "next";
import { prisma } from '@/lib/prisma'

// SEO metadata for this page
export const metadata: Metadata = {
  title: "Local Directory",
  description: "Sample local directory homepage",
};

// Page component
export default async function Home() {

  //   data: {
  //     email: "chad@gmail.com",
  //     name: "Chadie Gil",
  //     phone: "09761273",
  //     role: UserRole.ADMIN,
  //     isVerified: true,
  //   },
  // });

  const users = await prisma.user.findMany();
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Local Directory</h1>
      <ul className="list-disc pl-6">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
