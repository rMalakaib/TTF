"use client"

import type { ReactNode } from "react"
import { AppSidebar } from "./app-sidebar"

interface MainLayoutProps {
  children: ReactNode
  score?: number
  maxScore?: number
}

export function MainLayout({ children, score, maxScore }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-[#ffffff]">
      <AppSidebar score={score} maxScore={maxScore} />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  )
}
