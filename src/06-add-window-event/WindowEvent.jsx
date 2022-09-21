import { useEffect } from 'react'

export default function WindowEvent() {
  useEffect(() => {
    const doubleClick = () => alert('Mouse Pressionado duas vezes')

    window.addEventListener('dblclick', doubleClick)

    return () => window.removeEventListener('dblclick', doubleClick)
  }, [])
  return<h1>Evento doubleClick ativado</h1>
}
