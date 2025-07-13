"use client"

import { useState, useEffect } from "react"
import { strapiClient, extractQuestionData } from "../lib/strapi"
import type { QuestionData } from "./use-question"

export interface UseQuestionsReturn {
  questions: QuestionData[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useQuestions(): UseQuestionsReturn {
  const [questions, setQuestions] = useState<QuestionData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuestions = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await strapiClient.getQuestions()
      const questionsData = response.data.map(extractQuestionData)
      setQuestions(questionsData)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch questions"
      setError(errorMessage)
      console.error("Error fetching questions:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  return {
    questions,
    loading,
    error,
    refetch: fetchQuestions,
  }
}
