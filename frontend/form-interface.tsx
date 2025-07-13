"use client"

import { useState } from "react"
import { MainLayout } from "./components/layout/main-layout"
import { FilingSelection } from "./components/layout/filing-selection"
import { QuestionHeader } from "./components/question/question-header"
import { ContentBoxes } from "./components/question/content-boxes"
import { TextEditor } from "./components/forms/text-editor"
import { ErrorMessage } from "./components/ui/error-message"
import { useQuestion } from "./hooks/use-question"

interface FormInterfaceProps {
  questionOrder?: number
  questionId?: number
}

export default function FormInterface({ questionOrder = 1, questionId }: FormInterfaceProps) {
  const [editorContent, setEditorContent] = useState("")
  const { question, loading, error, refetch } = useQuestion(questionId, questionOrder)

  if (error) {
    return (
      <MainLayout score={20} maxScore={40}>
        <FilingSelection />
        <div className="flex-1 p-6">
          <div className="max-w-6xl ml-32">
            <ErrorMessage message={error} onRetry={refetch} />
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout score={20} maxScore={40}>
      <FilingSelection />

      <div className="flex-1 p-6">
        <div className="max-w-6xl ml-32">
          <QuestionHeader questionTitle={question?.questionTitle} stepInfo={question?.stepInfo} loading={loading} />

          <ContentBoxes
            factsContent={question?.factsContent}
            scoringCriteria={question?.scoringCriteria}
            maxScoreExample={question?.maxScoreExample}
            loading={loading}
          />

          <TextEditor content={editorContent} onContentChange={setEditorContent} showToggle={false} />
        </div>
      </div>
    </MainLayout>
  )
}
