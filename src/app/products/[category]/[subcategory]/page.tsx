import { artSupplies } from "@/app/data";
import { notFound } from "next/navigation";
import { ProductLink } from "@/components/ui/product-card";
export default async function Page(props: {
  params: Promise<{
    subcategory: string;
    category: string;
  }>;
}) {
  const { subcategory, category } = await props.params;

  const urlDecodedCategory = decodeURIComponent(category);
  const categoryData = artSupplies.find((c) =>
    c.categories.find((cat) => cat.categoryName === urlDecodedCategory),
  );
  const cat = categoryData?.categories.find(
    (cat) => cat.categoryName === urlDecodedCategory,
  );
  const urlDecodedSubcategory = decodeURIComponent(subcategory);
  const screwTypes = cat?.categoryItems.find((collection) =>
    collection.subcategories.find(
      (sub) => sub.subcategoryName === urlDecodedSubcategory,
    ),
  );
  const sub = screwTypes?.subcategories.find(
    (sub) => sub.subcategoryName === urlDecodedSubcategory,
  );
  if (!sub) {
    return notFound();
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-2 border-b-2 text-sm font-bold">690 Products</h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {sub.products.map((item) => (
          <ProductLink
            key={item.name}
            category={category}
            subcategory={subcategory}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
