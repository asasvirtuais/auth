import { Auth0Client } from '@auth0/nextjs-auth0/server';
// Inicialização do cliente Auth0
export const auth0 = new Auth0Client({
    async beforeSessionSaved(session) {
        const suser = session?.user;
        if (!suser)
            throw new Error('User not found');
        // const sub = session?.sub
        // let user
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
        // if ( ! user )
        //   throw new Error('User not found')
        return {
            ...session,
            user: {
                // id: user?.id,
                ...session.user,
            }
        };
    }
});
export async function getUser() {
    return (await auth0.getSession())?.user;
}
export default auth0;
//# sourceMappingURL=auth0.js.map