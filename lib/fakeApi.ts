import { Product } from "./types";

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