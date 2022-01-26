import React, { useState } from "react";
import { useCounter } from '../../hooks/useCounter';
import { Small } from "./Small";

import "../02-useEffect/effect.css";

export const Memorize = () => {
    //creamos un estado con el initialstate de 10
    const { state, increment } = useCounter( 10 );

    //creamos el estado para mostra u ocultar algo
    const [show, setShow] = useState(true)

  return (
    <div>
      {/* mandamos el estado como props al componente small  */}
      <h1>Counter: <Small value={ state } /></h1>
      <hr />

      {/* incrementamos el estado en 1 al presionar el boton y con el otro boton cambiamos el estado de show a false y viceversa  */}
      <button className="btn btn-primary" onClick={()=> increment() }>+1</button>
      <button className="btn btn-outline-primary ml-5" onClick={ ()=> setShow( !show ) }>Show/Hide { JSON.stringify( show ) }</button>
    </div>
  );
};
