"use client"
import withAuth from '@/HOC/withAuth'

import withMenu from '@/HOC/withMenu'

 function ConversationHistory() {
  return (
    <main>
      <h1>Conversation History</h1>
    </main>
  )
}


export default withMenu(ConversationHistory)