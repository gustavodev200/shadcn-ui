"use client";
import { Product } from "@/types/product";
import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useCartStore } from "@/stores/cart-store";

type Props = {
  item: Product;
};

const ProductItem = ({ item }: Props) => {
  const { toast } = useToast();
  const { upsertCartItem } = useCartStore((state) => state);
  const handleAddButton = () => {
    upsertCartItem(item, 1);
    toast({
      title: "Adicionado ao carrinho",
      description: item.name,
      action: <ToastAction altText="Fechar">Fechar</ToastAction>,
    });
  };
  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-lg">{item.name}</p>
        <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
        <Button onClick={handleAddButton}>Adicionar</Button>
      </div>
    </div>
  );
};

export default ProductItem;
