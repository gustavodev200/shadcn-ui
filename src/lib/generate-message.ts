import { useCartStore } from "@/stores/cart-store";
import { useCheackoutStore } from "@/stores/checkout-store";

export const generateMessage = () => {
  const { name, address } = useCheackoutStore((state) => state);
  const { cart } = useCartStore((state) => state);
  let orderProducts = [];
  for (let item of cart) {
    orderProducts.push(`${item.quantity}x ${item.product.name}`);
  }

  return `**Dados do cliente:**
---------------------------------------------------------------------------
Nome: ${name}
---------------------------------------------------------------------------
Endereço: ${address.street}, ${address.number} (${address.complement}) - ${
    address.district
  }, ${address.city} - ${address.state}
---------------------------------------------------------------------------
**Pedido:**
${orderProducts.join("\n")}`;
};
