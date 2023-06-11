import React, { useEffect } from "react"

const DialogflowMessenger = () => {
  useEffect(() => {
    // Create a new df-messenger element
    const messenger = document.createElement("df-messenger")
    messenger.setAttribute("intent", "WELCOME")
    messenger.setAttribute("chat-title", "Team")
    messenger.setAttribute("agent-id", "d0c7c75c-05c9-46bf-b757-e5a1ebd77776")
    messenger.setAttribute("language-code", "en")

    // Get the current df-messenger element and its parent
    const currentMessenger = document.querySelector("df-messenger")
    const parent = currentMessenger.parentNode

    // Replace the current df-messenger element with the new one
    parent.replaceChild(messenger, currentMessenger)
  }, [])

  return <df-messenger></df-messenger>
}

export default DialogflowMessenger
