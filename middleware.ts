import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// 公开路由，不需要认证
const publicRoutes = ["/", "/courses", "/exam", "/practice"]
const authRoutes = ["/login", "/register"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("auth_token")?.value

  // 如果已登录用户访问登录/注册页，重定向到首页
  if (token && authRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // 检查是否需要认证
  const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith("/api/public"))

  // 如果不是公开路由且没有token，重定向到登录页
  if (!isPublicRoute && !token && !pathname.startsWith("/api")) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
}
