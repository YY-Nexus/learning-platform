import { NextResponse } from "next/server"
import { courseData } from "@/data/course-data"

export async function GET() {
  try {
    return NextResponse.json({
      courses: courseData,
      total: courseData.length,
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
