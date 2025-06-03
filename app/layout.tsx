import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

import { ReactLenis } from "@/utils/Lenis";

export const metadata: Metadata = {
  title: "Derren Amadeo",
  description: "Fullsatck Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`font-mori antialiased`}>
          <Navbar />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
