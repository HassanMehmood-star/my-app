export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      <p className="mt-4 text-blue-600 font-semibold">Loading...</p>
    </div>
  );
}
