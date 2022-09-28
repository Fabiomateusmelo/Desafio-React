import { useEffect, useState } from "react"

export default function UseEffect () {
  const [name, setName] = useState('Bia')
  useEffect(() => {
    document.title = `Parabens ${name}`
  })
  return (
    <section>
      <h4>
        Parabéns {name}!!!
      </h4>
      <button onClick={() => setName('Fábio')}>
        Mudar Vencedor
      </button>
    </section>
  )
}