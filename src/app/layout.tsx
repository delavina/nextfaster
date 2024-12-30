import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { SearchDropdownComponent } from "@/components/search-dropdown";
import { MenuIcon } from "lucide-react";
import { Suspense } from "react";
import { Cart } from "@/components/cart";

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

// revalidate the data at most every day
export const revalidate = 86400;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
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
                <div className="rounded-sm bg-stone-100 px-2 pb-2 tracking-tighter">
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
                  ORDERN
                </Link>
                <Suspense>
                  <Cart />
                </Suspense>
              </div>
              <Link
                href="/order-history"
                className="hidden text-lg text-green-800 hover:underline md:block"
              >
                Meine Bestellungen
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
