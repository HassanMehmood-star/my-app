import Link from "next/link";

const photos = [
  {
    id: 1,
    title: "Mountain View",
    image: "https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=...",
  },
  {
    id: 2,
    title: "City Lights",
    image: "https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=...",
  },
  {
    id: 3,
    title: "Ocean Breeze",
    image: "https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=...",
  },
];

export default function PhotoFeed() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Photo Feed</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/photo-feed/photo/${photo.id}`} // ✅ MATCHES folder name
            className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-lg"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-medium">{photo.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
