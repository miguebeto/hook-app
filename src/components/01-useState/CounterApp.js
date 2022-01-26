import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {

  //Creamos un estado con el hook useState asignando como valor incial un objeto con los valores del los contadores  
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40
  });

  //realizamos la desestructuración de los valores que queremos mostrar en pantalla, ya que no se permite redereziar un objeto directamente en react
  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        // Realizamos una copia del estado para mantener los valores anteriores y cambiamos el valor a + 1 cada que ocurra el evento 
        onClick={() => setState({
            ...state,
            counter1: counter1 + 1
        })}
      >
        +1
      </button>
    </>
  );
};
