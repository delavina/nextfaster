import { categories } from "@/db/schema";
import { db } from "@/db";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allCategories = await db.select().from(categories);
  return (
    <div className="font-helvetica-roman flex flex-grow">
      <aside className="hidden w-48 min-w-48 border-r border-gray-400 p-3 md:block">
        <h2 className="border-b border-green-800 text-sm font-semibold text-green-900">
          Choose a Category
        </h2>
        <ul className="flex flex-col items-start justify-center">
          {allCategories.map((category) => (
            <li key={category.name} className="w-full">
              <a
                href={`/products/${category.slug}`}
                className="block w-full py-1 text-xs text-gray-800 hover:bg-yellow-100 hover:underline"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
