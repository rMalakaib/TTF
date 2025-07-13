"use client"

// Strapi API configuration
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

// TypeScript interfaces for Strapi data
export interface StrapiQuestion {
  id: number
  attributes: {
    questionTitle: string
    stepInfo: string
    factsContent: string
    scoringCriteria: string
    maxScoreExample: string
    questionOrder: number
    isActive: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiError {
  error: {
    status: number
    name: string
    message: string
    details?: any
  }
}

// API client class
class StrapiClient {
  private baseURL: string
  private token?: string

  constructor(baseURL: string, token?: string) {
    this.baseURL = baseURL
    this.token = token
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}/api${endpoint}`

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      if (!response.ok) {
        const errorData: StrapiError = await response.json()
        throw new Error(`Strapi API Error: ${errorData.error.message}`)
      }

      return await response.json()
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error("Unknown error occurred while fetching data")
    }
  }

  // Get all questions
  async getQuestions(): Promise<StrapiResponse<StrapiQuestion[]>> {
    return this.request<StrapiResponse<StrapiQuestion[]>>(
      "/questions?sort=questionOrder:asc&filters[isActive][$eq]=true",
    )
  }

  // Get question by ID
  async getQuestionById(id: number): Promise<StrapiResponse<StrapiQuestion>> {
    return this.request<StrapiResponse<StrapiQuestion>>(`/questions/${id}`)
  }

  // Get question by order
  async getQuestionByOrder(order: number): Promise<StrapiResponse<StrapiQuestion[]>> {
    return this.request<StrapiResponse<StrapiQuestion[]>>(
      `/questions?filters[questionOrder][$eq]=${order}&filters[isActive][$eq]=true`,
    )
  }
}

// Export singleton instance
export const strapiClient = new StrapiClient(STRAPI_URL, STRAPI_API_TOKEN)

// Helper function to extract question data
export function extractQuestionData(strapiQuestion: StrapiQuestion) {
  return {
    id: strapiQuestion.id,
    questionTitle: strapiQuestion.attributes.questionTitle,
    stepInfo: strapiQuestion.attributes.stepInfo,
    factsContent: strapiQuestion.attributes.factsContent,
    scoringCriteria: strapiQuestion.attributes.scoringCriteria,
    maxScoreExample: strapiQuestion.attributes.maxScoreExample,
    questionOrder: strapiQuestion.attributes.questionOrder,
    isActive: strapiQuestion.attributes.isActive,
  }
}
