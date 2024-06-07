"use server";

import { userService } from "./user.service";

export async function logout() {
  console.log("logout");
  return;
}
export async function login(email: string, password: string) {
  const user = userService.findByEmail(email);
  console.log(user, password);
}
