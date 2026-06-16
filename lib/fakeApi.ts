import { Product, ProductResponse } from "./types";

type ApiResponse<T> = {
    success: boolean;
    data?: T;
    message?: string;
};

export async function getProducts():
    Promise<ApiResponse<Product[]>>
{

    const response =
        await fetch(
            "/api/products"
        );

    const json =
        await response.json();

    return json;
}

export async function getProduct(
    id: number
): Promise<ProductResponse> {

    const response =
        await fetch(
            `/api/products/${id}`
        );

    return response.json();

}