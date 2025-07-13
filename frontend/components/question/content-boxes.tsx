"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "../ui/loading-spinner"

interface ContentBoxesProps {
  factsContent?: string
  scoringCriteria?: string
  maxScoreExample?: string
  loading?: boolean
}

export function ContentBoxes({ factsContent, scoringCriteria, maxScoreExample, loading = false }: ContentBoxesProps) {
  const [showExample, setShowExample] = useState(false)

  const toggleView = () => {
    setShowExample(!showExample)
  }

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="h-40 bg-[#e9e9e9] border border-[#cbcbcb] rounded flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
        <div className="h-40 bg-[#e9e9e9] border border-[#cbcbcb] rounded flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {/* Box 1: Facts/Requirements */}
      <div className="h-40 bg-[#d9d9d9] border border-[#cbcbcb] rounded p-4 overflow-auto">
        <div className="text-[#000000] text-sm leading-relaxed">
          {factsContent ? (
            <div dangerouslySetInnerHTML={{ __html: factsContent }} />
          ) : (
            <span className="text-gray-500">No facts content available</span>
          )}
        </div>
      </div>

      {/* Box 2: Scoring Criteria with Toggle */}
      <div className="relative">
        <div className="h-40 bg-[#d9d9d9] border border-[#cbcbcb] rounded p-4 overflow-auto">
          <div className="text-[#000000] text-sm leading-relaxed transition-opacity duration-300">
            {showExample ? (
              maxScoreExample ? (
                <div dangerouslySetInnerHTML={{ __html: maxScoreExample }} />
              ) : (
                <span className="text-gray-500">No example content available</span>
              )
            ) : scoringCriteria ? (
              <div dangerouslySetInnerHTML={{ __html: scoringCriteria }} />
            ) : (
              <span className="text-gray-500">No scoring criteria available</span>
            )}
          </div>
        </div>

        {/* Toggle Button */}
        {maxScoreExample && (
          <Button
            onClick={toggleView}
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 p-1 h-8 w-8 bg-white/80 hover:bg-white/90 transition-all duration-200"
            title={showExample ? "Show Scoring Criteria" : "Show Example"}
          >
            {showExample ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        )}
      </div>
    </div>
  )
}
