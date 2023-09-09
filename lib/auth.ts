import { NextAuthOptions, User } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { customerAPI } from "@/util/API/Customer";
import { ErrorProps } from "next/error";

type Warn ={
    statusCode:'',
    title:''
}
export const authconfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const cus = await customerAPI.Login({ email: credentials?.email, password: credentials?.password })
                    if (cus) {
                        const user: User = {
                            id: cus.id,
                            email: cus.email,
                            image: "https://png.pngtree.com/png-clipart/20200701/original/pngtree-black-default-avatar-png-image_5407174.jpg",
                            name: cus.name
                        }
                        return user
                    }    
                } catch (error: any) {
                    throw new Error(error.response.data.message)
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
