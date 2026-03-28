import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${afacad.variable} font-[family-name:var(--font-afacad)] antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}