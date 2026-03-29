import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pick A Batch",
  description: "Know Your Batch. Choose Better. Feel Better.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
