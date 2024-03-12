"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("E-mail não válido!"),
  password: z.string().min(2, "Precisa ter no mínimo 2 caracteres!"),
});

const LoginForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Faça o Login</CardTitle>
        <CardDescription>Digite seus dados de login.</CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
    </Card>
  );
};

export default LoginForm;
