import { NextAuthOptions, User } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { customerAPI } from "@/util/API/Customer";

export const authconfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null
                }
                const cus = await customerAPI.findByKey({ email: credentials.email, password: credentials.password })
                if (cus) {
                    const user: User = {
                        id: cus.id,
                        email: cus.email,
                        image: '',
                        name: cus.name,
                    }
                    return user
                }
                return null



            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),

    ],
    pages: {
        signIn: '/login'
    }
}

export function LoginIsRequiredClient() {
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/login")
        },
    })
}
