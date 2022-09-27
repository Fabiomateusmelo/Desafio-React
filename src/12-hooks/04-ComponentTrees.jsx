import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const createArray = (length) => [
  ...Array(length)
]

function Star({ selected = false, onSelect }) {
  return (
    <FaStar color={selected ? 'blueviolet' : 'turquoise'} onClick={onSelect} />
  )
}

function StarRating({ totalStars }) {
  const [
    selectedStars,
    setSelectedStars
  ] = useState(0)
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <h3>
        {selectedStars} de {totalStars}
      </h3>
    </>
  )
}

export default function Componente() {
  return <StarRating totalStars={10} />
}