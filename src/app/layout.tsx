import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { artSupplies } from "./data";
import { SearchDropdownComponent } from "@/components/search-dropdown";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allCategories = artSupplies.flatMap((item) => item.categories);
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}
      >
        <div className="flex flex-grow flex-col">
          <header className="flex items-center justify-between border-b-2 border-stone-300 p-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-medium">
                digital<span className="text-red-600">props</span>
              </Link>
            </div>
            <SearchDropdownComponent />
            <div className="flex flex-row justify-between space-x-4">
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
                {allCategories.map((category) => (
                  <li
                    key={category.categoryName}
                    className="group pb-2 hover:bg-stone-200"
                  >
                    <Link
                      href={`/products/${category.categoryName}`}
                      className="text-xs text-gray-800 group-hover:underline"
                    >
                      {category.categoryName}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
            <main className="flex-grow">{children}</main>
          </div>
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
