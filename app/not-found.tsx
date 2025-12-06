import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">页面未找到</h2>
          <p className="text-lg text-muted-foreground mb-8">抱歉，您访问的页面不存在或已被移除。</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              返回首页
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/courses">
              <Search className="mr-2 h-5 w-5" />
              浏览课程
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-semibold mb-2">热门课程</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/courses/ai-engineer" className="hover:text-primary">
                  AI工程师认证
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary">
                  全部课程
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-semibold mb-2">考试中心</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/exam" className="hover:text-primary">
                  在线考试
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-primary">
                  练习测试
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-semibold mb-2">个人中心</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/profile" className="hover:text-primary">
                  我的资料
                </Link>
              </li>
              <li>
                <Link href="/progress" className="hover:text-primary">
                  学习进度
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
