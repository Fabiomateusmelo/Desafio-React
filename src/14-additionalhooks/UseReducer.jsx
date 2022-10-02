import { useReducer } from "react"


export default function UseReducer() {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0)
  return (
    <h1 onClick={() => setNumber(1)}>{number}</h1>
  )
}