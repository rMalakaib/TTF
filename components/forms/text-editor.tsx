"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Underline, List, Plus, Search, ArrowUp, Eye } from "lucide-react"

interface TextEditorProps {
  content?: string
  onContentChange?: (content: string) => void
  showToggle?: boolean
  onToggleView?: () => void
}

export function TextEditor({ content = "", onContentChange, showToggle = true, onToggleView }: TextEditorProps) {
  const [charCount] = useState("2/3")

  return (
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
          {showToggle && (
            <Button variant="ghost" size="sm" className="p-1 h-8 w-8" onClick={onToggleView}>
              <Eye className="w-4 h-4" />
            </Button>
          )}
        </div>
        <div className="text-sm text-[#000000]">{charCount}</div>
      </div>

      {/* Editor Area */}
      <div className="relative">
        <div className="h-80 bg-[#d9d9d9] p-4">
          <textarea
            className="w-full h-full bg-transparent border-none outline-none resize-none text-[#000000]"
            placeholder="Start typing..."
            value={content}
            onChange={(e) => onContentChange?.(e.target.value)}
          />
        </div>

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
  )
}
