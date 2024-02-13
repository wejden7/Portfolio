import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WejDev",
  description: "Portfolio WejDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary " >{children}</body>
    </html>
  );
}
