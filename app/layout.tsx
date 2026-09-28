import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"amarigio | Προσωποποιημένες δημιουργίες",description:"Προσωποποιημένες δημιουργίες για γάμους, bachelorette και ξεχωριστές στιγμές.",openGraph:{title:"amarigio",description:"Thoughtfully designed. Beautifully personal.",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="el"><body>{children}</body></html>}
