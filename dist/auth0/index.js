"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth0 = void 0;
const server_1 = require("@auth0/nextjs-auth0/server");
// Inicialização do cliente Auth0
exports.auth0 = new server_1.Auth0Client({
    async beforeSessionSaved(session) {
        const sub = session?.user?.sub;
        const suser = session?.user;
        if (!suser)
            throw new Error('User not found');
        let user;
        // const guestId = `${(await cookies()).get('guest-key')?.value}`
        // const found = await feathers.service('users').find({
        //     query: { auth0_id: sub }
        // })
        // if (found.length === 0) {
        //   user = await feathers.service('users').create({
        //     name: suser.name as string,
        //     auth0_id: sub,
        //   })
        // } else {
        //   user = found[0]
        // }
        if (!user)
            throw new Error('User not found');
        return {
            ...session,
            user: {
                // id: user?.id,
                ...session.user,
            }
        };
    }
});
exports.default = exports.auth0;
//# sourceMappingURL=index.js.map