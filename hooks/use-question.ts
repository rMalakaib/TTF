"use client"

import { useState, useEffect } from "react"
import { strapiClient, extractQuestionData } from "../lib/strapi"

export interface QuestionData {
  id: number
  questionTitle: string
  stepInfo: string
  factsContent: string
  scoringCriteria: string
  maxScoreExample: string
  questionOrder: number
  isActive: boolean
}

export interface UseQuestionReturn {
  question: QuestionData | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useQuestion(questionId?: number, questionOrder?: number): UseQuestionReturn {
  const [question, setQuestion] = useState<QuestionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuestion = async () => {
    if (!questionId && !questionOrder) {
      setError("Either questionId or questionOrder must be provided")
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)

      let response
      if (questionId) {
        response = await strapiClient.getQuestionById(questionId)
        const questionData = extractQuestionData(response.data)
        setQuestion(questionData)
      } else if (questionOrder) {
        response = await strapiClient.getQuestionByOrder(questionOrder)
        if (response.data.length > 0) {
          const questionData = extractQuestionData(response.data[0])
          setQuestion(questionData)
        } else {
          setError(`No question found with order ${questionOrder}`)
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch question"
      setError(errorMessage)
      console.error("Error fetching question:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuestion()
  }, [questionId, questionOrder])

  return {
    question,
    loading,
    error,
    refetch: fetchQuestion,
  }
}
