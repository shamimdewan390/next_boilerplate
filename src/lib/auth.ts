import NextAuth, { type DefaultSession } from "next-auth";
// import { env } from "@/env";
import { authConfig } from "@/auth.config";
// import { userService } from "@/modules/user/user.service";
export type ExtendedUser = DefaultSession["user"] & {
  role: "USER" | "ADMIN";
  // role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};
declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }

  //   // interface User {
  //   //   // ...other properties
  //   //   // role: UserRole;
  //   // }
}
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    // signOut: "/auth/signout",
    error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: null,
  },
  // events: {
  //   async linkAccount({ user }) {
  //     await db.user.update({
  //       where: { id: user.id },
  //       data: {
  //         emailVerified: new Date(),
  //       },
  //     });
  //   },
  // },
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   // Allow OAuth without email verification
    //   if (account?.provider !== "credentials") return true;

    //   const existingUser = await getUserById(user.id);

    //   // Prevent sign in without email verification
    //   if (!existingUser?.emailVerified) return false;

    //   if (existingUser.isTwoFactorEnabled) {
    //     const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
    //       existingUser.id,
    //     );

    //     if (!twoFactorConfirmation) return false;

    //     // Delete two factor confirmation for next sign in
    //     await db.twoFactorConfirmation.delete({
    //       where: { id: twoFactorConfirmation.id },
    //     });
    //   }

    //   return true;
    //   // if (user) {
    //   //   return true;
    //   // }
    //   // return false;
    // },
    async jwt({ token, user }) {
      // console.log("token", token);
      // if (!token.sub) return token;

      // const existingUser = await userService.findById(token.sub);

      // if (!existingUser) return token;

      // const existingAccount = await getAccountByUserId(existingUser.id);

      // token.isOAuth = !!existingAccount;
      // token.name = existingUser.name;
      // token.email = existingUser.email;
      // token.role = existingUser.role;
      // token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ token, session }) {
      console.log("token", token);
      // if (token.sub && session.user) {
      //   session.user.id = token.sub;
      // }

      // if (token.role && session.user) {
      //   session.user.role = token.role as any;
      // }

      // if (session.user) {
      //   session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      // }

      // if (session.user) {
      //   session.user.name = token.name;
      //   // session.user.email = token.email;
      //   session.user.isOAuth = token.isOAuth as boolean;
      // }

      return session;
      // return {
      //   ...session,
      //   user: {
      //     ...session.user,
      //     id: token.id,
      //   },
      // };
    },
  },
  // adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
// export const authOptions: NextAuthOptions = {
//   callbacks: {
//     session: ({ session, user }) => ({
//       ...session,
//       user: {
//         ...session.user,
//         id: user.id,
//       },
//     }),
//   },
// };
