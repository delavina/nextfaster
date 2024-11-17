import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories } from "./data";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="flex items-center justify-between p-4 border-b-2 border-y-red-300">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
              <Link href="/" className="text-2xl font-bold">
                digitalprops
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Suche" className="pl-8 w-[300px]" />
              </div>
              <Button variant="ghost">ORDER</Button>
              <Button variant="ghost">ORDER HISTORY</Button>
            </div>
          </header>
          <div className="flex flex-1">
            <aside className="w-64 border-r border-stone-400 selection:p-4 hidden md:block">
              <h2 className="font-semibold mb-4">Choose a Category</h2>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category} className=" hover:bg-stone-100 pb-2 group">
                    <a
                      href="#"
                      className="text-xs group-hover:underline text-stone-800"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
