import { useState } from 'react'

/*function DarkMode () {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`page ${darkMode && 'dark-mode'}`}>
      <button
        className='dark-mode-button'
        onClick={() => setDarkMode(true)}
      >
        Dark Mode
      </button>
      <button
        className='light-mode-button'
        onClick={() => setDarkMode(false)}
      >
        Light Mode
      </button>
    </div>
  )
}

export default DarkMode
*/

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`page ${darkMode && 'dark-mode'}`}>
      <button className="dark-mode-button" onClick={() => setDarkMode(true)}>
        Modo Escuro
      </button>
      <button className="light-mode-button" onClick={() => setDarkMode(false)}>
        Modo Claro
      </button>
    </div>
  )
}
