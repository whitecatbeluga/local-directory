"use client"

interface BusinessInfo {
  image: string
  title: string
  store_type: string
  address: string
  rating: string
  reviews: number
  description: string
  number: string
  website?: string
  direction: string
}

const sampleData: BusinessInfo = {
  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  title: "Down Town Coffee",
  store_type: "Coffee Shop | Restaurant",
  address: "123 Main Street, Cebu City",
  rating: "5",
  reviews: 123,
  description:
    "Cozy coffee shop serving premium roasted coffee, fresh pastries, and light meals. Free WiFi and perfect for working or meetings.",
  number: "0920394414",
  website: "www.getcoffee.com",
  direction:
    "Block 11, The Coffee Bean & Tea Leaf Garden Row, Garden Row, Abad St, Cebu City, 6000 Cebu",
}

interface CustomCardProps {
  businessProps?: BusinessInfo
}

export default function CustomCard({ businessProps }: CustomCardProps) {
  const business = sampleData

  return (
    <div className="w-full flex-1 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 flex flex-col">
      {business.image && (
        <img
          src={business.image}
          alt={business.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{business.title}</h2>
        <p className="text-gray-500 text-sm mb-2">{business.store_type}</p>
        <p className="text-gray-600 text-sm mb-2">{business.address}</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 font-bold mr-2">⭐ {business.rating}</span>
          <span className="text-gray-500 text-sm">({business.reviews} reviews)</span>
        </div>
        <p className="text-gray-700 mb-4 text-sm flex-1">{business.description}</p>
        <div className="flex flex-col gap-2 mt-auto">
          <a
            href={`tel:${business.number}`}
            className="text-blue-600 hover:underline text-sm"
          >
            Call: {business.number}
          </a>
          {business.website && (
            <a
              href={`https://${business.website}`}
              target="_blank"
              className="text-blue-600 hover:underline text-sm"
            >
              Website: {business.website}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

