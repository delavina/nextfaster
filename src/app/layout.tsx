import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        {children}
        <div className="flex flex-col min-h-screen">
          <header className="">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">McMaster-Carr</h1>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2">
                  <span>(404) 346-7000</span>
                  <button>Email Us</button>
                  <button>Log In</button>
                </div>
              </div>
            </div>
          </header>
          <nav className="border-b">
            <div className="container mx-auto flex justify-between items-center p-4">
              <div className="flex-1 max-w-xl">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-full pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button>Order</button>
                <button>Order History</button>
              </div>
            </div>
          </nav>
          <div className="flex-1 flex">
            <aside className="w-64  p-4 hidden md:block">
              <h2 className="font-bold mb-4">Choose a Category</h2>
              <ul className="space-y-2">
                {[
                  "Fastening & Joining",
                  "Pipe, Tubing, Hose & Fittings",
                  "Power Transmission",
                  "Material Handling",
                  "Electrical",
                ].map((category) => (
                  <li key={category} className=" p-2 rounded">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <main>{children}</main>
          </div>
          <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
            <p>© 2023 McMaster-Carr. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
