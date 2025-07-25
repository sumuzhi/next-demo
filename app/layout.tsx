import "./globals.css";
import { ADLaM_Display } from "next/font/google";
const ad = ADLaM_Display({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({
  children,
  hero
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en' className={ad.className}>
      <body>{hero}{children}</body>
    </html>
  );
}
