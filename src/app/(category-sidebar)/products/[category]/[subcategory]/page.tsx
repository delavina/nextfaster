import { db } from "@/db";
import { notFound } from "next/navigation";
import { ProductLink } from "@/components/ui/product-card";
import { products } from "@/db/schema";
import { count, eq } from "drizzle-orm";
import type { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { subcategory: subcategoryParam } = await props.params;
  const urlDecodedCategory = decodeURIComponent(subcategoryParam);

  const subcategory = await db.query.subcategories.findFirst({
    where: (subcategories, { eq }) =>
      eq(subcategories.slug, urlDecodedCategory),
    orderBy: (categories, { asc }) => asc(categories.name),
  });

  const rows = await db
    .select({ count: count() })
    .from(products)
    .where(eq(products.subcategory_slug, urlDecodedCategory));

  if (!subcategory) {
    return notFound();
  }

  const description = rows[0]?.count
    ? `Choose from over ${rows[0]?.count - 1} products in ${subcategory.name}. In stock and ready to ship.`
    : undefined;

  return {
    openGraph: { title: subcategory.name, description },
  };
}

export default async function Page(props: {
  params: Promise<{
    subcategory: string;
    category: string;
  }>;
}) {
  const { subcategory, category } = await props.params;
  // const urlDecodedCategory = decodeURIComponent(category);
  const urlDecodedSubcategory = decodeURIComponent(subcategory);
  const sub = await db.query.subcategories.findFirst({
    where: (subcategories, { eq }) =>
      eq(subcategories.slug, urlDecodedSubcategory),
    with: {
      products: true,
    },
    orderBy: (subcategories, { asc }) => asc(subcategories.name),
  });

  if (!sub) {
    return notFound();
  }

  const countRes = await db
    .select({ count: count() })
    .from(products)
    .where(eq(products.subcategory_slug, urlDecodedSubcategory));

  const finalCount = countRes[0]?.count;

  return (
    <div className="container mx-auto p-4">
      {finalCount && (
        <h1 className="mb-2 border-b-2 text-sm font-bold">
          {finalCount} {finalCount === 1 ? "Product" : "Products"}
        </h1>
      )}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {sub.products.map((product) => (
          <ProductLink
            key={product.name}
            category_slug={category}
            subcategory_slug={subcategory}
            product={product}
            imageUrl={product.image_url}
          />
        ))}
      </div>
    </div>
  );
}
