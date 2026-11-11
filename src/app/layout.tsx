
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "SUUQY | Shop Smart. Live Better.",
    template: "%s | SUUQY",
  },
  description:
    "Discover quality furniture, chairs, tables, gym equipment, office essentials and more at SUUQY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
