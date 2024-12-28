import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { SearchDropdownComponent } from "@/components/search-dropdown";
import { getCart } from "@/lib/cart";
import { MenuIcon } from "lucide-react";

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
  title: "digitalprops",
  description: "beautifully designed art supplies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await getCart();

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}
      >
        <div className="flex flex-grow flex-col">
          <header className="flex items-center justify-between gap-4 border-b-2 border-stone-300 p-2 md:p-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="hidden text-3xl font-medium sm:block">
                digital<span className="text-red-600">props</span>
              </Link>
              <Link href="/" className="block text-4xl font-medium sm:hidden">
                <div className="rounded-sm bg-stone-100 p-2 tracking-tighter">
                  <span className="text-black">d</span>
                  <span className="text-red-600">p</span>
                </div>
              </Link>
            </div>
            <SearchDropdownComponent />
            <div className="flex flex-row justify-between space-x-4">
              <div className="relative">
                <Link
                  href="/order"
                  className="text-lg text-green-800 hover:underline"
                >
                  ORDER
                </Link>
                {cart.length > 0 && (
                  <div className="absolute -right-3 -top-1 rounded-full bg-yellow-300 px-1 text-xs text-green-800">
                    {" "}
                    {cart.length}
                  </div>
                )}
              </div>
              <Link
                href="/order-history"
                className="hidden text-lg text-green-800 hover:underline md:block"
              >
                ORDER HISTORY
              </Link>
              <Link
                href="/order-history"
                className="block text-lg text-green-800 hover:underline md:hidden"
              >
                <MenuIcon />
              </Link>
            </div>
          </header>
          {children}
        </div>
        <footer className="flex h-auto flex-col items-center justify-between space-y-2 border-t border-gray-400 px-4 text-[11px] sm:h-6 sm:flex-row sm:space-y-0">
          <div className="flex flex-wrap justify-center space-x-1 sm:justify-start">
            <span className="hover:bg-stone-200 hover:underline">Home</span>
            <span>|</span>
            <span className="hover:bg-stone-200 hover:underline">Location</span>
            <span>|</span>
            <span className="hover:bg-stone-200 hover:underline">Returns</span>
            <span>|</span>
            <span className="hover:bg-stone-200 hover:underline">Careers</span>
            <span>|</span>
            <span className="hover:bg-stone-200 hover:underline">
              Mobile App
            </span>
            <span>|</span>
            <span className="hover:bg-stone-200 hover:underline">Help</span>
            <span>|</span>
            <span className="hover:bg-stone-200 hover:underline">Settings</span>
          </div>
          <div className="text-center sm:text-right">
            By using this website, you agree to our Terms and Conditions:{" "}
            <Link
              href="https://github.com/ethanniser/NextMaster"
              className="font-bold hover:underline"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
