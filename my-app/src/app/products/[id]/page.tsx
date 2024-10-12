export default function ProductInfo({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Produc Info {params.id}</h1>
    </>
  );
}
