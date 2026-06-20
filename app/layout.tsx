import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devika Harshey",
  description: "Books, anthologies, and literary works by Devika Harshey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}