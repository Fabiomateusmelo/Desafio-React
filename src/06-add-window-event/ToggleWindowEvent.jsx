import { useState } from 'react'
import WindowEvent from './WindowEvent'

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false)
  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>
        Alterar evento de janela
      </button>
      {windowEvent && <WindowEvent/>}
    </div>
  )
}
