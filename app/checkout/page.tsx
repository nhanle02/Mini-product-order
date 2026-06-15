"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/lib/mockProducts";
import CheckoutForm from "@/components/CheckoutForm";
import Image from "next/image"; 


export default function CheckoutPage() {

    const searchParams = useSearchParams();

    const productId = Number(
        searchParams.get("productId")
    );

    const product = products.find(
        (item) => item.id === productId
    );

    if (!product) {
        return (
            <div className="p-6">
                Product not found
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
            />

        </div>
    );
}