"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Product } from "../db/schema";
import { searchProducts } from "../lib/actions";
import Link from "next/link";

type SearchResult = Product & {
  href: string;
};

export function SearchDropdownComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const search = async () => {
      const results = await searchProducts(searchTerm);
      setFilteredItems(results);
    };

    search();
  }, [searchTerm]);

  return (
    <div className="font-sans">
      <div className="relative w-full">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(e.target.value.length > 0);
            }}
            className="w-[180px] font-sans font-medium sm:w-[300px] md:w-[375px]"
          />
          <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <X
            className={cn(
              "absolute right-7 top-2 h-5 w-5 text-muted-foreground",
              {
                hidden: !isOpen,
              },
            )}
            onClick={() => {
              setSearchTerm("");
              setIsOpen(false);
            }}
          />
        </div>
        {isOpen && filteredItems.length > 0 && (
          <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
            <ScrollArea className="h-[300px]">
              {filteredItems.map((item) => (
                <Link href={item.href} key={item.slug}>
                  <div
                    key={item.href}
                    className="flex cursor-pointer items-center p-2 hover:bg-stone-200"
                  >
                    <Image
                      src={item.imageUrl ?? "/placeholder.svg"}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 flex-shrink-0 object-cover pr-2"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                </Link>
              ))}
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
}
