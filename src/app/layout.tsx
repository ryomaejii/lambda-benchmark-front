import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lambda Benchmark",
  description: "This is a benchmark for AWS Lambda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="sticky top-0 flex justify-center items-center px-4 h-header border border-b w-full">
          <h1 className="font-bold text-2xl">ISUCON 練習会 ベンチマーク</h1>
        </header>
        <div className="w-full max-w-screen-lg px-4 py-8 mx-auto">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
