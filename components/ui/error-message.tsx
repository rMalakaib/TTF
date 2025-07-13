"use client"

import { AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
  className?: string
}

export function ErrorMessage({ message, onRetry, className = "" }: ErrorMessageProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-6 text-center ${className}`}>
      <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold text-[#000000] mb-2">Error Loading Content</h3>
      <p className="text-[#000000] mb-4 max-w-md">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="flex items-center space-x-2 bg-transparent">
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </Button>
      )}
    </div>
  )
}
