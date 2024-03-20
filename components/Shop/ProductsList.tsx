import stripe from "@/lib/stripe";
import { Products } from "@/types";
import Stripe from "stripe";
import ProductCard from "./ProductCard";

async function getProducts() {
  try {
    const stipeProduct = await stripe.products.list({
      limit: 9,
      expand: ["data.default_price"],
    });

    return stipeProduct.data.map((p: Stripe.Product): Products => {
      return {
        id: p.id.toString(),
        name: p.name,
        description: p.description ?? "",
        price: (p.default_price as Stripe.Price).unit_amount_decimal ?? "0",
        currency: (p.default_price as Stripe.Price).currency ?? "BRL",
        images: p.images,
        image: p.images[0],
      };
    });
  } catch (e: any) {
    console.log(e);
  }
}

export default async function ProductsList() {
  const products = await getProducts();
  return (
    <section className="grid gap-4 m-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((p, i) => (
        <div key={i}>
         <ProductCard {...p} />
        </div>
       
      ))}
    </section>
  );
}
