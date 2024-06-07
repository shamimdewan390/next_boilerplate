import { z } from "zod";
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type LoginInput = z.infer<typeof LoginSchema>;

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["USER", "ADMIN"]),
  isTwoFactorEnabled: z.boolean(),
  isOAuth: z.boolean(),
});
export type User = z.infer<typeof UserSchema>;
