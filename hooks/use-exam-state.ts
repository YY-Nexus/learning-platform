"use client"

import { useState, useCallback } from "react"

export interface ExamState {
  currentQuestion: number
  answers: Record<number, string>
  timeRemaining: number
  isSubmitted: boolean
  score: number | null
}

export function useExamState(totalQuestions: number, timeLimit: number) {
  const [state, setState] = useState<ExamState>({
    currentQuestion: 0,
    answers: {},
    timeRemaining: timeLimit,
    isSubmitted: false,
    score: null,
  })

  const nextQuestion = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentQuestion: Math.min(prev.currentQuestion + 1, totalQuestions - 1),
    }))
  }, [totalQuestions])

  const previousQuestion = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentQuestion: Math.max(prev.currentQuestion - 1, 0),
    }))
  }, [])

  const setAnswer = useCallback((questionIndex: number, answer: string) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionIndex]: answer,
      },
    }))
  }, [])

  const submitExam = useCallback((calculatedScore: number) => {
    setState((prev) => ({
      ...prev,
      isSubmitted: true,
      score: calculatedScore,
    }))
  }, [])

  const resetExam = useCallback(() => {
    setState({
      currentQuestion: 0,
      answers: {},
      timeRemaining: timeLimit,
      isSubmitted: false,
      score: null,
    })
  }, [timeLimit])

  const decrementTime = useCallback(() => {
    setState((prev) => ({
      ...prev,
      timeRemaining: Math.max(prev.timeRemaining - 1, 0),
    }))
  }, [])

  return {
    state,
    nextQuestion,
    previousQuestion,
    setAnswer,
    submitExam,
    resetExam,
    decrementTime,
  }
}
