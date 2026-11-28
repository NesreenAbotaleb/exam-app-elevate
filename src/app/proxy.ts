import { NextResponse, type NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

const LOGIN_ROUTE = "/login"
const DEFAULT_ROUTE = "/"

// Login Not required pages
const PUBLIC_ROUTES = ["/login", "/register", "/forgot-password"]

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const isPublic = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )

  if (!token && !isPublic) {
    const loginUrl = new URL(LOGIN_ROUTE, request.url)
    loginUrl.searchParams.set("returnUrl", `${pathname}${search}`)
    return NextResponse.redirect(loginUrl)
  }

  // Already logged in + auth page -> go to the app
  if (token && isPublic) {
    return NextResponse.redirect(new URL(DEFAULT_ROUTE, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}