import React from "react"

const DialogflowMessenger = () => {
  return (
    <df-messenger
      intent="WELCOME"
      chat-title="Team"
      agent-id="d0c7c75c-05c9-46bf-b757-e5a1ebd77776"
      language-code="en"
    ></df-messenger>
  )
}

export default DialogflowMessenger
