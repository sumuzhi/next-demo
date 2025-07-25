import "./globals.css";
import { ADLaM_Display } from "next/font/google";
const ad = ADLaM_Display({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({
  children,
  header
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en' className={ad.className}>
      <body>
        {header}
        {children}
      </body>
    </html>
  );
}
