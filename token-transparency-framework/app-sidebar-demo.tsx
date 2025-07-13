"use client"

import { useState } from "react"
import { AppSidebar } from "./components/app-sidebar"
import { Button } from "@/components/ui/button"

export default function AppSidebarDemo() {
  const [score, setScore] = useState(20)

  const incrementScore = () => {
    setScore((prev) => Math.min(prev + 5, 40))
  }

  const decrementScore = () => {
    setScore((prev) => Math.max(prev - 5, 0))
  }

  const resetScore = () => {
    setScore(20)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AppSidebar score={score} />

      {/* Demo Content */}
      <div className="flex-1 p-8">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold mb-6">AppSidebar Demo</h1>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border">
              <h2 className="font-semibold mb-2">Current Score</h2>
              <p className="text-3xl font-bold text-green-600">{score}/40</p>
              <p className="text-sm text-gray-600 mt-1">{Math.round((score / 40) * 100)}% Complete</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Test Progress Updates:</h3>
              <div className="flex gap-2">
                <Button onClick={decrementScore} variant="outline" size="sm">
                  -5
                </Button>
                <Button onClick={resetScore} variant="outline" size="sm">
                  Reset
                </Button>
                <Button onClick={incrementScore} variant="outline" size="sm">
                  +5
                </Button>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium mb-2">Features:</h3>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Hover over sidebar to see table of contents icon</li>
                <li>• Dynamic progress circle with smooth animations</li>
                <li>• Responsive design</li>
                <li>• Accessible with proper ARIA labels</li>
                <li>• Customizable score and max score props</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
