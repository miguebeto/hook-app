import React, { useRef } from "react";
import "../02-useEffect/effect.css";

export const FocusScreen = () => {

  //creamos una referencia
  const inputRef = useRef();

  //cuando le damos click al boton selecciona el input seleccionando el valor dentro del input (similar al focus)
  const handleClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      {/* Le asignamos la referencia al input y con el boton activamos la funcion que ejecuta el select del texto  */}
      <input ref={ inputRef } className="form-control" placeholder="Su nombre" />
      <button className="btn btn-outline-primary mt-2" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
