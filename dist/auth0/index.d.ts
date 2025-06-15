import { Auth0Client } from '@auth0/nextjs-auth0/server';
declare module '@auth0/nextjs-auth0/server' {
    interface User {
        id: string;
    }
}
export declare const auth0: Auth0Client;
export default auth0;
//# sourceMappingURL=index.d.ts.map