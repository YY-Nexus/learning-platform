"use client"

import { useState, useEffect, useCallback } from "react"

export function useTimer(initialTime: number, onExpire?: () => void) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning || timeRemaining <= 0) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          onExpire?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning, timeRemaining, onExpire])

  const start = useCallback(() => setIsRunning(true), [])
  const pause = useCallback(() => setIsRunning(false), [])
  const reset = useCallback(() => {
    setTimeRemaining(initialTime)
    setIsRunning(false)
  }, [initialTime])

  return { timeRemaining, isRunning, start, pause, reset }
}
