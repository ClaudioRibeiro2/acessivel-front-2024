"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string(40).min(2), // tratar melhor o nome com regex
  email: z.string(150).email().min(4),
  cpf: z.string(11).min(11).max(11),
  dateBirth: z.string().date(),
  password: z.string().min(8),
  passwordConfirm: z.string().min(8)
});

export default function RegisterUserForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      dateBirth: "",
      password: "",
      passwordConfirm: "",
    }
  })

  function onSubmit(values) {
    alert(values)
  }

  return (
    <Form {...form} className="max">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input placeholder="nome completo" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="e-mail" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="cpf"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input placeholder="cpf" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="dateBirth"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de nascimento</FormLabel>
              <FormControl>
                <Input placeholder="data de nascimento" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input placeholder="senha" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="passwordConfirm"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Senha</FormLabel>
              <FormControl>
                <Input placeholder="senha" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Cadastrar-se
        </Button>
      </form>
    </Form>
  )
}