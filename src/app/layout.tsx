import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal AI",
  description: "Юридический чат",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased min-h-screen bg-neutral-900 text-gray-100">
        {children}
      </body>
    </html>
  );
}
