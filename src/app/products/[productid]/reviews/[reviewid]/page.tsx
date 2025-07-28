type Props = {
  params: {
    productid: string;
    reviewid: string;
  };
};

export default function ProductReview({ params }: Props) {
  const { productid, reviewid } = params;

  return (
    <div>
      <h1>Product ID: {productid}</h1>
      <h2>Review ID: {reviewid}</h2>
      <p>This is a specific review of a specific product.</p>
    </div>
  );
}
