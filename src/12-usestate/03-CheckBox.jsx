import { useState } from "react";

export default function CheckBox() {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <input type='checkbox' value={checked} onChange={() => setChecked(!checked)} />
      <p>{checked ? 'marcado' : 'não marcado'}</p>
    </div>
  );
}

// Se estiver checked, diremos 'checked'(?), caso contrário(:), não marcado