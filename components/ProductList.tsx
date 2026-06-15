"use client";

import ProductCard from "./ProductCard";
import { Product } from "@/lib/types";

type Props = {
    products: Product[];
    onBuy: (id:number) => void;
};

export default function ProductList({ products, onBuy }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onBuy={onBuy} />
      ))}
    </div>
  );
}