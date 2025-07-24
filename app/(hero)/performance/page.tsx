import Hero from "@/components/Hero";
import performanceImg from "@/public/2.jpg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "performance 页面",
  description: "欢迎来到 performance 页面",
};


export default function Performance() {
  return (
    <h2 className='text-2xl font-bold text-amber-300'>
      <Hero
        imgUrl={performanceImg}
        altTxt='Performance Image'
        content='Performance Page'
      />
    </h2>
  );
}
