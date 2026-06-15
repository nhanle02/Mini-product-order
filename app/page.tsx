import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Mini Store Demo
      </h1>

      <Link
        href="/products"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go To Products
      </Link>
    </div>
  );
}