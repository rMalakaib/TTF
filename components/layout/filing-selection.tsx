"use client"

import { ChevronDown } from "lucide-react"

interface FilingSelectionProps {
  selectedFiling?: string
  onFilingChange?: (filing: string) => void
}

export function FilingSelection({ selectedFiling = "Project Q4 2025 Filing", onFilingChange }: FilingSelectionProps) {
  return (
    <div className="p-6 border-b border-[#e9e9e9]">
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="text-[#000000] font-medium">{selectedFiling}</span>
        <ChevronDown className="w-4 h-4 text-[#000000]" />
      </div>
    </div>
  )
}
