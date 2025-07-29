import Link from "next/link";
export const dynamic = "force-dynamic"; // 强制动态渲染
export default function CacheLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link href='/news'>News</Link>
        <Link href='/sport'>Sport</Link>
      </nav>
      {children}
    </div>
  );
}
