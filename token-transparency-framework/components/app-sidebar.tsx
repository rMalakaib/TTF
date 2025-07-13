"use client"

import { Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppSidebarProps {
  score?: number
  maxScore?: number
  className?: string
}

export function AppSidebar({ score = 20, maxScore = 40, className }: AppSidebarProps) {
  const progressPercentage = (score / maxScore) * 100
  const circumference = 2 * Math.PI * 20
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference

  return (
    <div
      className={cn(
        "w-20 bg-white border-r border-gray-200 flex flex-col justify-between items-center py-6 min-h-screen group transition-all duration-200",
        "hover:shadow-sm",
        className,
      )}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center space-y-6">
        {/* Logo with Hover Effect */}
        <div className="w-12 h-12 flex items-center justify-center relative">
          {/* Default Blockworks Logo */}
          <img
            src="/blockworks-logo.png"
            alt="Blockworks Logo"
            className="w-10 h-10 object-contain group-hover:opacity-0 transition-opacity duration-200"
          />
          {/* Table of Contents Icon on Hover */}
          <img
            src="/table-of-contents-icon.png"
            alt="Table of Contents"
            className="w-8 h-8 object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
        </div>

        {/* Dynamic Progress Circle */}
        <div className="relative w-12 h-12">
          <svg
            className="w-12 h-12 transform -rotate-90"
            viewBox="0 0 48 48"
            aria-label={`Progress: ${score} out of ${maxScore}`}
          >
            {/* Background circle */}
            <circle cx="24" cy="24" r="20" stroke="#e5e7eb" strokeWidth="4" fill="transparent" />
            {/* Progress circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#baffba"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-500 ease-out"
              strokeLinecap="round"
            />
          </svg>
          {/* Score Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-black font-semibold text-sm tabular-nums">{score}</span>
          </div>
        </div>

        {/* Mail Icon */}
        <div className="w-12 h-12 flex items-center justify-center group/mail">
          <Mail className="w-6 h-6 text-black transition-colors duration-200 group-hover/mail:text-gray-600" />
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="flex items-center justify-center pb-4">
        <img
          src="/blockworks-branding.png"
          alt="Blockworks Token Transparency Framework"
          className="w-16 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
        />
      </div>
    </div>
  )
}
