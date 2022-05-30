import { useState } from 'react';
import './button.css';
export function Button() {
  const [check, setSelected] = useState(false);

  return (
    <>
      <i
        onClick={() => setSelected(!check)}
        className={
          check
            ? ' icon gentleman__icon fas fa-check'
            : 'icon gentleman__icon fas fa-check'
        }
      ></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </>
  );
}
