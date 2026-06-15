import { NextResponse } from "next/server";

import { products } from "@/lib/mockProducts";

export async function GET() {

    await new Promise(
        (resolve) =>
            setTimeout(resolve, 500)
    );

    if (Math.random() < 0.1) {

        return NextResponse.json(
            {
                success: false,
                message:
                    "Failed to load products",
            },
            {
                status: 500,
            }
        );

    }

    return NextResponse.json(
        {
            success: true,
            data: products,
        }
    );

}