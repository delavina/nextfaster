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
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-grow flex-col">
          <header className="flex items-center justify-between border-b-2 border-stone-300 p-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
              <Link href="/" className="text-2xl font-medium">
                digital<span className="text-red-600">props</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input placeholder="Suche" className="w-[300px]" />
                <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
              <Link
                href="/order"
                className="text-lg text-green-800 hover:underline"
              >
                ORDER
              </Link>
              <Link
                href="/order-history"
                className="text-lg text-stone-800 hover:underline"
              >
                ORDER HISTORY
              </Link>
            </div>
          </header>
          <div className="flex flex-grow">
            <aside className="hidden w-64 border-r border-stone-400 selection:p-4 md:block">
              <h2 className="mb-4 font-semibold">Choose a Category</h2>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category} className="group pb-2 hover:bg-stone-100">
                    <a
                      href="#"
                      className="text-xs text-stone-800 group-hover:underline"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <main className="flex-grow">{children}</main>
          </div>
        </div>
        <footer className="flex h-6 items-center justify-between border-t border-gray-400 px-4 text-[11px]">
          <div>
            <Link href="/" className="p-1 hover:bg-stone-200 hover:underline">
              Home
            </Link>
            <span>|</span>
            <Link
              href="/contact"
              className="p-1 hover:bg-stone-200 hover:underline"
            >
              Kontakt
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="p-1 hover:bg-stone-200 hover:underline"
            >
              AGB
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="p-1 hover:bg-stone-200 hover:underline"
            >
              Datenschutz
            </Link>
            <span>|</span>
            <Link
              href="/about"
              className="p-1 hover:bg-stone-200 hover:underline"
            >
              About
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="p-1 hover:bg-stone-200 hover:underline"
            >
              Solidworks Add-In
            </Link>
            <span>|</span>
            <Link
              href="/help"
              className="p-1 hover:bg-stone-200 hover:underline"
            >
              Hilfe
            </Link>
            <span>|</span>
            <Link
              href="/settings"
              className="p-1 hover:bg-stone-200 hover:underline"
            >
              Settings
            </Link>
          </div>
          <div>
            By using this website, you agree to our Terms and Conditions and
            Privacy Policy
          </div>
        </footer>
      </body>
    </html>
  );
}
