"use client";

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  description?: string;
  price: string | number;
  currency: string;
  image: string;
  images?: string[];
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  currency,
  image,
  images,
}: ProductCardProps) {
  const { toast } = useToast();
  const { addItem } = useShoppingCart();

  const formatedPrice = formatCurrencyString({
    value: Number(price),
    currency,
    language: "pt-BR",
  });

  async function addCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    addItem({
      name,
      description,
      id,
      image,
      currency,
      price: Number(price),
      
    });

    toast({
      title: ` o produto ${name} foi adiçionado `,
      description: "adiçione mais produtos ao carrinho de compras ",
    });
  }

  const loaderProp =({ src }:{src : any}) => {
    return src;
}

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-center min-h-[4rem]">
            {name}
          </CardTitle>
          <CardDescription className="relative w-full h-60">
            <Image
               src={image}
              alt={name}
              fill
              sizes="100%"
              loader={loaderProp}
              className="object-contain"
            />
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <p className="min-h-[6rem]">{description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div>
            <p>Preco</p>
            <p>{formatedPrice}</p>
          </div>
          <Button size={"lg"} variant={"default"} onClick={addCart}>
            Comprar
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
