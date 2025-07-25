import React from "react";
import Image from "next/image";
import { Product, products } from "@/data";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p: Product) => p.id === Number(id));
  if (!product) {
    return <div className='text-center text-red-500'>Product not found</div>;
  }
  return (
    <div className='container mx-auto pt-8'>
      <Image
        src={product?.imgSrc}
        alt={product?.imgAlt}
        width={500}
        height={500}
        className='rounded-lg block mx-auto'
        priority={true}
      />
      <div className='border-2 border-dashed border-gray-500 rounded-lg p-3 mt-6'>
        <p>
          <strong>Title: {product?.color}</strong>
        </p>
        <p>
          <strong>Price: {product?.price}</strong>
        </p>
        <p>
          <strong>Description:</strong> {product?.imgAlt}
        </p>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ex in
        sequi enim fugit, rerum tempore obcaecati? Placeat reiciendis deleniti,
        omnis voluptatum facilis, sed officia mollitia quaerat at in
        consequuntur?
      </div>
    </div>
  );
}
