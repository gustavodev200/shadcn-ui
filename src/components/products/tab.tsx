import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import ProductEmpty from "./empty";
import ProductItem from "./item";

type Tab = {
  title: string;
  value: string;
  products: Product[];
};

const ProductsTab = async () => {
  const products = await getAllProducts();

  const tabs: Tab[] = [
    {
      title: "Sushi",
      value: "sushi",
      products: products.filter((product) => product.category === "sushi"),
    },

    {
      title: "Temaki",
      value: "temaki",
      products: products.filter((product) => product.category === "temaki"),
    },
    {
      title: "Combinados",
      value: "pack",
      products: products.filter((product) => product.category === "pack"),
    },

    {
      title: "Bebidas",
      value: "beverage",
      products: products.filter((product) => product.category === "beverage"),
    },
  ];

  return (
    <Tabs defaultValue="sushi">
      <TabsList className="flex">
        {tabs.map((item) => (
          <TabsTrigger key={item.value} value={item.value} className="flex-1">
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((item) => (
        <TabsContent value={item.value} key={item.value} className="my-6">
          {item.products.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {item.products.map((product) => (
                <ProductItem key={product.id} item={product} />
              ))}
            </div>
          )}

          {item.products.length === 0 && <ProductEmpty />}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProductsTab;
