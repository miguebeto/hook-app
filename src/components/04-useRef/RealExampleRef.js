import React, { useState } from "react";

import "../02-useEffect/effect.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  //creamos un estado que tendra de initial state false y cambiara a true cuando ejecutamos la funcion seteadora
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {/* Si show es true muestra el componente  */}
      {show && <MultipleCustomHooks />}
      {/* cambia el valor de true a false y viceversa al dar click  */}
      <button className="btn btn-success mt-2" onClick={() => setShow(!show)}>Show/Hide</button>
    </div>
  );
};
