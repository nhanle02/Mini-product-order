import { NextResponse } from "next/server";

import { products } from "@/lib/mockProducts";

type Params = {
    params: Promise<{id: string;}>;
};

export async function GET(
    request: Request,
    { params }: Params
) {
    // await new Promise(
    //     (resolve) =>
    //         setTimeout(resolve, 100)
    // );
    const { id } =
        await params;

    const product =
        products.find(
            (item) =>
                item.id === Number(id)
        );

    if (!product) {

        return NextResponse.json(
            {
                success: false,
                message:
                    "Product not found",
            },
            {
                status: 404,
            }
        );

    }

    return NextResponse.json(
        {
            success: true,
            data: product,
        }
    );

}