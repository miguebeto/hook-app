import { useState } from "react";

export const useCounter = (initialstate = 10) => {
  //Creamos un estado con el valor inicial que será pasado por props a nuestro hook
  const [state, setState] = useState(initialstate); //10

  //Creamos la funcion seteadora que va incrementar el valor del state sumado al valor pasado por props, por defecto es 1
  const increment = ( factor = 1 ) => {
    setState( state + factor );
  };
  
  //Creamos la funcion seteadora que va incrementar el valor del state restando el valor pasado por props, por defecto es 1
  const decrement = ( factor = 1 ) => {
    setState( state - factor );
  };
  
  
  //Creamos la funcion seteadora que va a resetear el valor del estado a su estado iicial (10) pasado por parámetro 
  const reset = () => {
    setState( initialstate );
  };

  //retornamos el esatdo y las funciones seteadoras que necesitaremos usar 
  return {
    state, 
    increment, 
    decrement,
    reset
  };
};
