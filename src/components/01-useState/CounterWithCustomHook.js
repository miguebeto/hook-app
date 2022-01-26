import React from "react";
import { useCounter } from "../../hooks/useCounter";
 
import "./counter.css";

export const CounterWithCustomHook = () => {
  //Usamos el custom hook creador extrayendo el estado y las funciones para incrementar, decrementar y resetear el estado
  const { state, increment, decrement, reset } =  useCounter(10);

  return (
    <>
      <h1>Counter with hook { state } </h1>
      <hr />
      {/* al pulsar el boton nos va permitir modificar mediante las funciones que traemos del state, el valor en las props estable el valor a sumar/restar  */}
      <button 
        className="btn btn-outline-primary"
        onClick={ ()=> increment(2) }
        >+1
      </button>
      <button 
        className="btn btn-outline-danger"
        onClick={ reset }
        >Reset
      </button>
      <button 
        className="btn btn-outline-primary"
        onClick={ ()=> decrement(2) }
        >-1
      </button>
    </>
  );
};
