import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../helpers/procesoPesado";

import "../02-useEffect/effect.css";

export const MemoHook = () => {
  //reutilizamos el custom hook para incrementar el estado en uno
  const { state, increment } = useCounter(5000);
  //creamos un estado para mostrar o no 
  const [show, setShow] = useState(true);

  //memorizamos el proceso pesado de iterar sobre que se recibe hasta 5000 y mandamos el un arreglo para saber cuando cambia (se ejecuta solo cuando cambia el estado y no cuando se hace otro proceso como por ejem el show)
  const memoProcesoPesado = useMemo(() => procesoPesado(state), [ state ])

  return (
    <div>
      <h3>
        {/* mostramos el estado con el valor  */}
        MemoHook: <small>{state}</small>
      </h3>
      <hr />
      {/* Mostramos el valor del proceso pesado con las iteraciones realizadas  */}
        <p>{ memoProcesoPesado }</p>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      {/* cambiamos el valor del show de true a false y viceversa para mostrar que no se ejecuta nuevamente el proceso pesado porque se memoriza y sabe que no cambia  */}
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
