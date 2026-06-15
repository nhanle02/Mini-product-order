"use client";

import { products } from "@/lib/mockProducts";
import ProductCard from "./ProductCard";

type Props = {
  onBuy: (id: number) => void;
};

export default function ProductList({ onBuy }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onBuy={onBuy} />
      ))}
    </div>
  );
}