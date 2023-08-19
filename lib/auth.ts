import { NextAuthOptions, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
export const authconfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),
    ]
}
export async function LoginIsRequiredServer() {
    const session = await getServerSession(authconfig);
    if (!session) return redirect('/login');
}

export function LoginIsRequiredClient() {
    const session = useSession();
    const route = useRouter();
    if (typeof window !== undefined) {
        if (!session) route.push("/login");
    }
}
