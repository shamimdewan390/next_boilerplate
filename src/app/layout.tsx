import "@/styles/globals.css";

import { inter } from "@/fonts";
import { cx } from "@/cva.config";

export const metadata = {
  title: "RedQ Technologies Limited",
  description: "Buy and sell quality products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cx(`relative h-full font-sans antialiased`, inter.variable)}
      >
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
