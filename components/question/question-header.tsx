"use client"

import { LoadingSpinner } from "../ui/loading-spinner"

interface QuestionHeaderProps {
  questionTitle?: string
  stepInfo?: string
  loading?: boolean
}

export function QuestionHeader({ questionTitle, stepInfo, loading = false }: QuestionHeaderProps) {
  if (loading) {
    return (
      <div className="mb-6 flex items-center space-x-4">
        <LoadingSpinner size="md" />
        <div>
          <div className="h-8 w-64 bg-[#e9e9e9] rounded animate-pulse mb-2"></div>
          <div className="h-4 w-48 bg-[#e9e9e9] rounded animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-[#000000] mb-2">{questionTitle || "Loading question..."}</h1>
      <p className="text-[#000000] text-sm">{stepInfo || "Loading step information..."}</p>
    </div>
  )
}
