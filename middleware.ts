import withAuth from "next-auth/middleware";

export default withAuth(
    {
        secret:'seocranet',
    }
);
export const config = {matcher: ["/book/:path*", "/user/:path*"]}
