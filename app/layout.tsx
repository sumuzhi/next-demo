import "./globals.css";
import { ADLaM_Display } from "next/font/google";
const ad = ADLaM_Display({
  weight: "400",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en' className={ad.className}>
      <body>{children}</body>
    </html>
  );
}
