type Props = {
  params: {
    slug?: string[];
  };
};

export default function Docs({ params }: Props) {
  const slugArray = params.slug || [];

  if (slugArray.length === 1) {
    return <h1>This is {slugArray[0]} content</h1>;
  }

  if (slugArray.length === 2) {
    return <h1>This is {slugArray[0]} {slugArray[1]}</h1>;
  }

  return <h1>This is the docx page</h1>;
}
