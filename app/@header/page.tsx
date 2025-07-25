"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
  { href: "/performance", label: "Performance" },
  { href: "/reliability", label: "Reliability" },
  { href: "/scale", label: "Scale" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className='absolute w-full z-10'>
      <div className='flex justify-between container mx-auto text-white p-8 items-center'>
        <Link className='text-3xl font-bold' href='/'>
          Home
        </Link>
        <div className='text-xl space-x-4'>
          {linkData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ? "text-purple-500 underline" : ""
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
