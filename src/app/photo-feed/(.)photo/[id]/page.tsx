"use client";

import { useParams, useRouter } from "next/navigation";

const photoData = {
  "1": {
    title: "Mountain View",
    image:
      "https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas=",
  },
  "2": {
    title: "City Lights",
    image:
      "https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas=",
  },
  "3": {
    title: "Ocean Breeze",
    image:
      "https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas=",
  },
};

export default function PhotoModal() {
  const router = useRouter();
  const { id } = useParams();

  const photo = photoData[id as keyof typeof photoData];

  if (!photo) return null;

  const closeModal = () => router.back();

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative bg-white rounded-xl shadow-lg max-w-xl w-full">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-black"
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-96 object-cover rounded-t-xl"
        />

        {/* Details */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{photo.title}</h2>
          <p className="text-gray-600">
            This is a detailed view of <strong>{photo.title}</strong>. You can
            customize this section to include descriptions, likes, or comments.
          </p>
        </div>
      </div>
    </div>
  );
}
