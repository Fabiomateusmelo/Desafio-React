import { useReducer } from "react"


export default function UseReducer() {
  const [number, setNumber] = useReducer()
  return (
    <h1>{number}</h1>
  )
}