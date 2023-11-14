"use client"

import { ShoppingCart } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'
import Link from 'next/link'
import React from 'react'

export default function CartButton() {

  const {formattedTotalPrice ,cartCount }= useShoppingCart()
  return (
    <Link href={"/cart"} className="flex items-center justify-center gap-2 ">
        ({formattedTotalPrice}) ({cartCount})
        <ShoppingCart className="font-extrabold h-6 w-6"/>
      
    </Link>
  )
}
