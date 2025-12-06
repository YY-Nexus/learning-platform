import { NextResponse } from "next/server"
import { testConnection } from "@/lib/database"

export async function GET() {
  try {
    const dbHealthy = await testConnection()

    const health = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      services: {
        database: dbHealthy ? "up" : "down",
        api: "up",
      },
      version: process.env.npm_package_version || "1.0.0",
    }

    return NextResponse.json(health, {
      status: dbHealthy ? 200 : 503,
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: "unhealthy",
        error: "Service unavailable",
      },
      { status: 503 },
    )
  }
}
