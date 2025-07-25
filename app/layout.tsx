import Link from "next/link";
import "./globals.css";
import { ADLaM_Display } from "next/font/google";
const ad = ADLaM_Display({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({
  children,
  team,
  analysic,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analysic: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en' className={ad.className}>
      <body>
        <div className='container mx-auto'>
          <div className='flex justify-center text-purple-500 p-6 gap-6'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
          </div>
          <div className='flex gap-6'>
            {team}
            {analysic}
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
