import { useState } from "react"

/*export default function UseState() {
  const result = useState();
  // useState retorna um array com posição 0 indefinida e posição 1 uma função 
  console.log(result)
  return (
    <div>
      <h1>Hook useSate</h1>
      <h2>O pacote é:</h2>
    </div>
  );
}*/

export default function UseState() {
  const [status, setStatus] = useState('Não Entregue');

  return (
    <div>
      <h1>Hook useState</h1>
      <h2>O pacote está: {status}.</h2>
      <button onClick={() => setStatus('Entregue')}>Confirmar</button>
    </div>
  );
}