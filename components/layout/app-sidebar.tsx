"use client"

import { Mail } from "lucide-react"
import { ProgressCircle } from "../ui/progress-circle"

interface AppSidebarProps {
  score?: number
  maxScore?: number
}

export function AppSidebar({ score = 20, maxScore = 40 }: AppSidebarProps) {
  return (
    <div className="w-20 bg-[#ffffff] border-r border-[#e9e9e9] flex flex-col justify-between items-center py-6 min-h-screen group">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo with hover effect */}
        <div className="w-12 h-12 flex items-center justify-center relative">
          <img
            src="/blockworks-logo.png"
            alt="Blockworks Logo"
            className="w-10 h-10 object-contain group-hover:opacity-0 transition-opacity duration-200"
          />
          <img
            src="/table-of-contents-icon.png"
            alt="Table of Contents"
            className="w-10 h-10 object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
        </div>

        {/* Progress Circle */}
        <ProgressCircle score={score} maxScore={maxScore} />

        {/* Mail Icon */}
        <div className="w-12 h-12 flex items-center justify-center">
          <Mail className="w-6 h-6 text-[#000000]" />
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="flex items-center justify-center pb-4">
        <img
          src="/blockworks-branding.png"
          alt="Blockworks Token Transparency Framework"
          className="w-16 h-auto object-contain"
        />
      </div>
    </div>
  )
}
