import { type NextRequest, NextResponse } from "next/server"
import { getExamById } from "@/data/exams"
import { getQuestionsByExamId } from "@/data/question-bank"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const exam = getExamById(params.id)

    if (!exam) {
      return NextResponse.json({ error: "Exam not found" }, { status: 404 })
    }

    const questions = getQuestionsByExamId(params.id)

    return NextResponse.json({
      exam,
      questions,
      totalQuestions: questions.length,
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
