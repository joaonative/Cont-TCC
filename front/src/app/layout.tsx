import type { Metadata } from "next";
import { Coustard } from "next/font/google";
import "./globals.css";

const inter = Coustard({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Cont;nue",
  description: "MITO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
