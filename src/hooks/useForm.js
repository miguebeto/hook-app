import { useState } from "react";

export const useForm = (initialState = {}) => {
  //creamos el custom hook con el estado, la funcion seteadora y el estadoinicial que se recibe por prop y por defecto es un objeto 
  const [values, setValues] = useState(initialState);

  //establece como valor inicial del estado el valo que nos pasan por parámetro
  const reset = () => {
    setValues( initialState );
  }

  //recibe el target del evento onchange y setea el valor del estado con un nuevo objeto que recibe el valor anterior y agrega el name: value del input
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  //retomamos el estado, el manejador de los eventos onChange y el reset
  return [ values, handleInputChange, reset ]

};
