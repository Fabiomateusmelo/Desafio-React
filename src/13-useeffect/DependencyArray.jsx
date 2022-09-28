import { useEffect, useState } from "react"

export default function DependencyArray () {
  const [name, setName] = useState('Bia')
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    console.log(`Parabéns ${name}`)
  }, [name])

  useEffect(() => {
    console.log(`O usuário é: ${admin ? 'admin' : 'não admin'}.`)
  }, [admin])

  return (
    <section>
      <h1>
        Array de Dependência
      </h1>
      <h4>
        Parabéns {name}!!!
      </h4>
      <button onClick={() => setName('Fábio')}>
        Mudar Vencedor
      </button>
      <p>{admin ? 'logado' : 'não logado'}</p>
      <button onClick={() => setAdmin(true)}>
        Entrar
      </button>
    </section>
  )
}