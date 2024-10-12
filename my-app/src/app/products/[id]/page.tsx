import {notFound} from "next/navigation"
export default function ProductInfo({ params }: { params: { id: string } }) {
  if (parseInt(params.id) > 1000){
    notFound();
  }
  return (
    <>
      <h1>Produc Info {params.id}</h1>
    </>
  );
}
