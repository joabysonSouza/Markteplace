import stripe from "@/lib/stripe";
import { DummyProducts } from "@/types";

async function getDummyProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=9");
  const dummyData = await response.json();
  const products = dummyData.products.map((product: DummyProducts) => {
    return {
      id: product.id,
      description: product.description,
      name: product.title,
      images: product.images,
      default_price_data: {
        unit_amount_decimal: product.price,
        currency: "BRL",
      },
    };
  });
  return products;
}

async function seedDummydata() {
  const products = await getDummyProducts();
  await products.map(async (product: any) => {
    try {
      const productCreated = await stripe.products.create( product );
      console.log(productCreated.name)
      
     
    } catch (e: any) {
      console.log("Stripe_Create_Error", e.message);
    }
  });
}

export default async function seed() {
   seedDummydata();
  return (
    <div className="container flex items-center justify-center my-11">
      <h1 className="text-xl text-green-600 font-extrabold">
        dummy data created in your Inventory. If you don't see it on your
        products dashboard{" "}
      </h1>
    </div>
  );
}
