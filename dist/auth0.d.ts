import { Auth0Client } from '@auth0/nextjs-auth0/server';
declare module '@auth0/nextjs-auth0/server' {
    interface User {
        id: string;
    }
}
export declare const auth0: Auth0Client;
export declare function getUser(): Promise<import("@auth0/nextjs-auth0/types").User | undefined>;
export declare function getUserOrRedirect(query?: string): Promise<import("@auth0/nextjs-auth0/types").User>;
export default auth0;
//# sourceMappingURL=auth0.d.ts.map