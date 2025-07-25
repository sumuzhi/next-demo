"use client";
import React from "react";
import { products } from "@/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const photo = products.find((item) => item.id === Number(id));
  const router = useRouter();
  if (!photo) return <div className='text-center text-red-500'>图片未找到</div>;
  return (
    <div
      className='flex justify-center items-center fixed inset-0 bg-gray-500/80'
      onClick={() => router.back()}
    >
      <Image
        src={photo.imgSrc}
        width={300}
        height={300}
        alt={photo.imgAlt}
        className='rounded-lg'
      />
    </div>
  );
}
