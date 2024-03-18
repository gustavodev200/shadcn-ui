import { useCheackoutStore } from "@/stores/checkout-store";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { generateMessage } from "@/lib/generate-message";

const StepFinish = () => {
  const { name } = useCheackoutStore((state) => state);

  const message = generateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}
  )}
  )}`;
  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso Atendente
        irá te guiar sobre o andamento do pedido.
      </p>
      <Button>
        <Link target="_blank" href={linkZap}>
          Enviar para o WhatsApp
        </Link>
      </Button>
    </div>
  );
};

export default StepFinish;
