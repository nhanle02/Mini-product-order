type Props = {
    searchParams: Promise<{
        product?: string;
    }>;
};

export default async function OrderSuccessPage({
    searchParams,
}: Props) {

    const params =
        await searchParams;

    return (

        <div className="max-w-xl mx-auto p-8">

            <h1 className="text-3xl font-bold mb-4">
                🎉 Order Success
            </h1>

            <p className="mb-4">
                Product:
                {" "}
                <strong>
                    {params.product}
                </strong>
            </p>

            <a
                href="/products"
                className="
                    bg-blue-500
                    text-white
                    px-4
                    py-2
                    rounded
                "
            >
                Back To Products
            </a>

        </div>

    );

}