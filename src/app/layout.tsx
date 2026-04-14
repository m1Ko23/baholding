import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B.A. Holding | Диверсифицированный холдинг",
  description: "B.A. Holding — диверсифицированная холдинговая компания, управляющая портфелем активов в ключевых секторах экономики.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}