import { useEffect, useState } from "react"

export default function FetchingData() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(``)
      .then(response => response.json())
      .then(setData)
  }, [])

  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.login}
            </li>
          ))}
        </ul>
        <button onClick={() => setData([])}>
            Remover Dados
        </button>
      </div>
    )
  }
  return <p>Nenhum usuário</p>
}