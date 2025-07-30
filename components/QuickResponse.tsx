import React from 'react'
import { Button } from './ui/button'
import { MessageCircle } from 'lucide-react'

const QuickResponse = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full px-4 py-2 shadow-lg border mb-2">
          <span className="text-sm font-medium">Quick Response!</span>
        </div>
        <Button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-4">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
  )
}

export default QuickResponse