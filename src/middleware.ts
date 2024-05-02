import {
  NextAuthMiddlewareOptions,
  NextRequestWithAuth,
  withAuth,
} from 'next-auth/middleware'

const middleware = (request: NextRequestWithAuth) => {
  console.log(`[MIDDLEWARE_NEXTAUTH_TOKEN]: ${JSON.stringify(request.nextauth.token)}`)
}
const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: ['/clients-devices/:path*'],
}
