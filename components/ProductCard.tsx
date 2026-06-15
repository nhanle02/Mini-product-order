"use client";

import { Product } from "@/lib/types";
import Image from "next/image";

type Props = {
  product: Product;
  onBuy: (id: number) => void;
};

export default function ProductCard({ product, onBuy }: Props) {
  return (
    <div className="border rounded p-4 shadow space-y-2">
        <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={200}
            className="w-full h-40 object-cover rounded"
        />

      <h2 className="font-bold text-lg">{product.name}</h2>

      <p className="text-sm text-gray-500">
        {product.description}
      </p>
    
      <p className="font-semibold">${product.price}</p>

      <button
        onClick={() => onBuy(product.id)}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Buy Now
      </button>
    </div>
  );
}