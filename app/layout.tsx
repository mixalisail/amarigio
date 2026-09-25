import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "amarigio | Custom creations, made for you",
  description: "Χειροποίητες, προσωποποιημένες δημιουργίες που σχεδιάζονται όπως ακριβώς τις φαντάζεστε.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="el"><body>{children}</body></html>;
}
