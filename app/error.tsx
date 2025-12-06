"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="mb-8">
          <AlertTriangle className="h-20 w-20 text-destructive mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">出错了</h1>
          <p className="text-lg text-muted-foreground mb-8">抱歉，应用程序遇到了一个错误。</p>
          {error.message && (
            <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-sm font-mono text-destructive">{error.message}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            重试
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/">返回首页</a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">如果问题持续存在，请联系技术支持</p>
      </div>
    </div>
  )
}
