"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mail, Bold, Italic, Underline, List, Plus, Search, ArrowUp } from "lucide-react"

export default function Component() {
  return (
    <div className="flex h-screen bg-[#ffffff]">
      {/* Left Sidebar */}
      <div className="w-20 bg-[#ffffff] border-r border-[#e9e9e9] flex flex-col justify-between items-center py-6 min-h-screen group">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
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

          {/* Progress Badge */}
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
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
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - 20 / 40)}`}
                className="transition-all duration-300 ease-in-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#000000] font-semibold text-sm">20</span>
            </div>
          </div>

          {/* Mail Icon */}
          <div className="w-12 h-12 flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#000000]" />
          </div>
        </div>

        {/* Bottom Branding */}
        <div className="flex items-center justify-center pb-4">
          <img
            src="/blockworks-branding-new.png"
            alt="Blockworks Token Transparency Framework"
            className="w-16 h-auto object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#e9e9e9]">
          <div className="flex items-center space-x-2">
            <span className="text-[#000000] font-medium">Project Q4 2025 Filing</span>
            <ChevronDown className="w-4 h-4 text-[#000000]" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <div className="max-w-6xl ml-32">
            {/* Question Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-[#000000] mb-2">Question 1.A Description of Project</h1>
              <p className="text-[#000000] text-sm">Step 1 - 3: First Submission</p>
            </div>

            {/* Two Gray Boxes */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="h-40 bg-[#d9d9d9] border border-[#cbcbcb] rounded flex items-center justify-center">
                <span className="text-[#000000] text-4xl font-bold">1</span>
              </div>
              <div className="h-40 bg-[#d9d9d9] border border-[#cbcbcb] rounded flex items-center justify-center">
                <span className="text-[#000000] text-4xl font-bold">2</span>
              </div>
            </div>

            {/* Text Editor */}
            <div className="border border-[#cbcbcb] rounded">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#cbcbcb] bg-[#e9e9e9]">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                    <Underline className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-sm text-[#000000]">2/3</div>
              </div>

              {/* Editor Area */}
              <div className="relative">
                <div className="h-80 bg-[#d9d9d9] p-4">{/* Editor content would go here */}</div>

                {/* Bottom Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                    <Plus className="w-4 h-4" />
                  </Button>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                      <Search className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                      <ArrowUp className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Branding */}
      </div>
    </div>
  )
}
