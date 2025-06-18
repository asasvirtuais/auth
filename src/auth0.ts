import { Auth0Client } from '@auth0/nextjs-auth0/server'
// import feathers from '@/src/database'
// import { cookies } from 'next/headers'

declare module '@auth0/nextjs-auth0/server' {
  interface User {
    id: string
  }
}

// Inicialização do cliente Auth0
export const auth0 = new Auth0Client({
  async beforeSessionSaved(session) {
    const suser = session?.user
    if ( ! suser )
      throw new Error('User not found')
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
      user:{
        // id: user?.id,
        ...session.user,
      }
    }
  }
})

export default auth0
