import NextAuth from "next-auth"
import Yandex from "next-auth/providers/yandex"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Yandex],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
})