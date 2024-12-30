import { cache } from "react";
import { detailedCart } from "@/lib/cart";
import Link from "next/link";
import Image from "next/image";
import { removeFromCart } from "@/lib/actions";
import { X } from "lucide-react";

const getCartItems = cache(() => detailedCart());
type CartItem = Awaited<ReturnType<typeof getCartItems>>[number];

export async function CartItems() {
  const cart = await getCartItems();
  return (
    <>
      {cart.length > 0 && (
        <div className="pb-4">
          <p className="font-semibold text-green-700">Delivers in 2-4 weeks</p>
          <p className="text-sm text-gray-500">Need this sooner?</p>
        </div>
      )}
      {cart.length > 0 ? (
        <div className="flex flex-col space-y-10">
          {cart.map((item) => (
            <CartItem key={item.slug} product={item} />
          ))}
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </>
  );
}
function CartItem({ product }: { product: CartItem }) {
  if (!product) {
    return null;
  }
  return (
    <div className="flex flex-row items-center justify-between space-x-4 border-t border-gray-200 pt-4">
      <Link
        href={`/products/${product.subcategory.subcollection.category_slug}/${product.subcategory.slug}/${product.slug}`}
      >
        <div className="flex flex-row space-x-4">
          <div className="flex h-24 w-24 items-center justify-center bg-gray-100">
            <Image
              src={product.image_url ?? "/placeholder.svg"}
              alt="Product"
              width={80}
              height={80}
              quality={65}
            />
          </div>
          <div className="flex-grow">
            <h2 className="font-semibold">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-center space-x-10">
        <p>{product.quantity}</p>
        <div className="min-w-24">
          <p>${product.price} each</p>
        </div>
        <div className="min-w-24">
          <p className="font-semibold">
            ${Number(product.price) * product.quantity}
          </p>
        </div>
        <form action={removeFromCart}>
          <button type="submit">
            <input type="hidden" name="productSlug" value={product.slug} />
            <X className="h-6 w-6" />
          </button>
        </form>
      </div>
    </div>
  );
}

export async function TotalCost() {
  const cart = await getCartItems();

  const totalCost = cart.reduce(
    (acc, item) => acc + item.quantity * Number(item.price),
    0,
  );

  return <span> ${totalCost.toFixed(2)}</span>;
}
