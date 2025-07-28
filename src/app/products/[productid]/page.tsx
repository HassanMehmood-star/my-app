type Props = {
  params: {
    productid: string;
  };
};

export default function Product({ params }: Props) {
  return <h1>This is my product details for ID: {params.productid}</h1>;
}
