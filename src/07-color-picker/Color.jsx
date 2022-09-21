export default function Color ({ hex, name, setBackgroundColor }) {
  return (
    <button
      style={{ backgroundColor: hex }}
      onClick={() => setBackgroundColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}