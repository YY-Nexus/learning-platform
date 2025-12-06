import { NextResponse } from "next/server"
import { teams } from "@/data/teams"

export async function GET() {
  try {
    return NextResponse.json({
      teams,
      total: teams.length,
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
