import Hero from "@/components/Hero";
import reliabilityImg from "@/public/3.jpg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "reliability 页面",
  description: "欢迎来到 reliability 页面",
};



export default function Reliability() {
  return (
    <h2 className='text-2xl font-bold text-amber-300'>
      <Hero
        imgUrl={reliabilityImg}
        altTxt='Reliability Image'
        content='Reliability Page'
      />
    </h2>
  );
}
