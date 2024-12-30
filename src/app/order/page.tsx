import { LoginForm } from "@/components/login-form";
import { Metadata } from "next";
import { Suspense } from "react";
import { CartItems, TotalCost } from "./dynamic";

export const metadata: Metadata = {
  title: "Auftrag",
};

export default async function Page() {
  return (
    <main className="min-h-screen p-4">
      <div className="container mx-auto p-3">
        <div className="flex items-center justify-between border-b border-gray-200">
          <h1 className="font-futura text-2xl text-green-800">Order</h1>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-4">
          <div className="col-span-2">
            <Suspense>
              <CartItems />
            </Suspense>
          </div>

          <div className="space-y-4">
            <div className="rounded bg-gray-100 p-4">
              <p className="font-semibold">
                Merchandise{" "}
                <Suspense>
                  <TotalCost />
                </Suspense>
              </p>
              <p className="text-sm text-gray-500">
                Applicable shipping and tax will be added.
              </p>
            </div>
            <p className="font-semibold text-green-800">
              Log in to place an order
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
