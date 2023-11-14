import { Store } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div>
        <Link href={"/"} className="flex items-center justify-center gap-2 text-xl font-extrabold text-sky-500">
            <Store className="text-sky-600 h-10 w-10"/>
            <span className="hidden sm:inline-block">
                Marketplace store
            </span>
        </Link>
      
    </div>
  )
}
