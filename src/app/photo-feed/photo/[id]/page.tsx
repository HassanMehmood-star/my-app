export default function PhotoDetailStandalone({ params }: { params: { id: string } }) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Full page view of photo {params.id}</h1>
    </div>
  );
}
