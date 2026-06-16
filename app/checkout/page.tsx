"use client";

import { useSearchParams } from "next/navigation";
import CheckoutForm from "@/components/CheckoutForm";
import Image from "next/image"; 
import { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import { getProduct } from "@/lib/fakeApi";
import { checkoutFields } from "@/lib/formConfig";


export default function CheckoutPage() {

    const searchParams = useSearchParams();

    const productId = Number(
        searchParams.get("productId")
    );

    const [product, setProduct] =
        useState<Product | null>(
            null
        );

    useEffect(() => {

        async function load() {

            const result =
                await getProduct(productId);    

            if (
                result.success
            ) {

                setProduct(
                    result.data ?? null
                );

            }

        }

        load();

    }, [productId]);

    if (!product) {
        return (
            <div className="p-6">
                Loading...
            </div>
        );
    }

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-4">
                Checkout
            </h1>

            {/* Thông tin sản phẩm */}
            <div className="border rounded p-4 mb-6">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="rounded mb-4"
                />
                <h2 className="text-xl font-semibold">
                    {product.name}
                </h2>

                <p>
                    Price: ${product.price}
                </p>

            </div>

            {/* Form */}
            <CheckoutForm
                product={product}
                fields={checkoutFields}
            />

        </div>
    );
}