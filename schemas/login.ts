import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email inválido!",
  }),
  password: z.string().min(8, {
    message: "Senha deve conter no mínimo 8 caracteres.",
  }),
});

export const createAccountSchema = loginSchema.extend({
  name: z.string().min(3, {
    message: "Nome deve conter no mínimo 3 caracteres.",
  }),
});

export type User = z.infer<typeof loginSchema>;
export type CreateUser = z.infer<typeof createAccountSchema>;
