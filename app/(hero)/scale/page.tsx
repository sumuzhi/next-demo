import Hero from "@/components/Hero";
import scaleImg from "@/public/4.jpg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "scale 页面",
  description: "欢迎来到 scale 页面",
};



export default function Scale() {
  return (
    <h2 className='text-2xl font-bold text-amber-300'>
      <Hero
        imgUrl={scaleImg}
        altTxt='Scale Image'
        content='Scale Page'
      />
    </h2>
  );
}
