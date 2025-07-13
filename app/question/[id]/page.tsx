import FormInterface from "../../../form-interface"

interface PageProps {
  params: {
    id: string
  }
}

export default function QuestionPage({ params }: PageProps) {
  const questionOrder = Number.parseInt(params.id)

  if (isNaN(questionOrder) || questionOrder < 1 || questionOrder > 18) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Invalid Question</h1>
          <p className="text-gray-600">Question must be between 1 and 18</p>
        </div>
      </div>
    )
  }

  return <FormInterface questionOrder={questionOrder} />
}
