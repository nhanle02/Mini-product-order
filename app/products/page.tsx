"use client";

import { useRouter } from "next/navigation";
import ProductList from "@/components/ProductList";

export default function ProductsPage() {
  const router = useRouter();

  const handleBuy = (id: number) => {
    router.push(`/checkout?productId=${id}`);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">
        🛒 Product Store
      </h1>

      <ProductList onBuy={handleBuy} />
    </div>
  );
}