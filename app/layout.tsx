import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/client";
import { Footer } from "@/components/ui";

export const metadata: Metadata = {
  title: "Falak.me",
  description: "AI technology studio based in Dubai. We build apps, host platforms, and ship code that works.",
  icons: { icon: "/assets/hMEiqYspBBM8ZRKuHUTJmZq6lU.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
