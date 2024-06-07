import { LoginSchema } from "@/modules/user/user.schema";
// import { userService } from "@/modules/user/user.service";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateCredentials = LoginSchema.safeParse(credentials);
        if (validateCredentials.success) {
          const { email, password } = validateCredentials.data;

          // const user = await userService.findByEmail(email);
          // if (!user?.password) return null;

          // const passwordsMatch = await bcrypt.compare(password, user.password);
          // if (passwordsMatch) return user;
          return { id: "1", name: "John Doe", email, password, role: "USER" };
        }
        return null;
      },
      // authorized({ auth, request: { nextUrl } }) {
      //       const isLoggedIn = !!auth?.user;
      //       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      //       if (isOnDashboard) {
      //         if (isLoggedIn) return true;
      //         return false; // Redirect unauthenticated users to login page
      //       } else if (isLoggedIn) {
      //         return Response.redirect(new URL('/dashboard', nextUrl));
      //       }
      //       return true;
      //     },
    }),
  ],
} satisfies NextAuthConfig;
