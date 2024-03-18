import { useCheackoutStore } from "@/stores/checkout-store";
import { CheckoutSteps } from "@/types/checkout-steps";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Precisa ter no mínimo 2 caracteres!"),
});

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};
const StepUser = ({ setStep }: Props) => {
  const { name, setName } = useCheackoutStore((state) => state);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);

    setStep("address");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="Qual seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="outline" type="submit">
          Próximo
        </Button>
      </form>
    </Form>
  );
};

export default StepUser;
