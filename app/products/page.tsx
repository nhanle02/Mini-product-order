"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ProductList from "@/components/ProductList";

import { Product } from "@/lib/types";
import { getProducts } from "@/lib/fakeApi";

export default function ProductsPage() {

    const router = useRouter();

    const [products, setProducts] =
        useState<Product[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        async function loadProducts() {

            try {

                const response =
                    await getProducts();

                if (!response.success) {

                    setError(
                        response.message ??
                        "Unknown error"
                    );

                    return;
                }

                setProducts(
                    response.data ?? []
                );

            } catch {

                setError(
                    "Something went wrong"
                );

            } finally {

                setLoading(false);

            }

        }

        loadProducts();

    }, []);

    const handleBuy = (
        id: number
    ) => {

        router.push(
            `/checkout?productId=${id}`
        );

    };

    if (loading) {

        return (
            <div className="p-6">
                Loading products...
            </div>
        );

    }

    if (error) {

        return (
            <div className="p-6 text-red-500">
                {error}
            </div>
        );

    }

    return (
        <div className="p-6 space-y-4">

            <h1 className="text-2xl font-bold">
                Product Store
            </h1>

            <ProductList
                products={products}
                onBuy={handleBuy}
            />

        </div>
    );
}