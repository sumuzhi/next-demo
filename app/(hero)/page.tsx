import Hero from "@/components/Hero";
import homeImg from "@/public/1.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "home 页面",
  description: "欢迎来到 home 页面",
};

export default function Home() {
  return (
    <Hero
      imgUrl={homeImg}
      altTxt='Home Image'
      content='Welcome to Our Website'
    />
  );
}
