import {checkError} from "@/common/validation/error";
import {customerAPI} from "@/util/API/Customer";
import {NextAuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";

export const authconfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                try {
                    const cus = await customerAPI.login({email: credentials?.email, password: credentials?.password})
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
                    throw new Error(checkError(error.response.data.message, error.response.data.param))
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
    },

    callbacks: {
        session: ({ session, token }) => ({
            ...session,
            user: {
                ...session.user,
                id: token.sub,
            },
        }),
    },
}

export function LoginIsRequiredClient() {
    const {status} = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/login")
        },
    })
}
