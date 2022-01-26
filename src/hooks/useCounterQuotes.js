import { useState } from "react";

export const useCounterQuotes = (initialstate = 10) => {

  //creamos un estado con initialstate que será recibido por props, por defecto es 10
  const [counter, setCounter] = useState(initialstate); //10

  //creamos las funciones que van a modificar el estado y luego serán exportadas
  const increment = () => {
   setCounter( counter + 1 );
  };

  const decrement = () => {
   setCounter( counter - 1 );
  };

  const reset = () => {
   setCounter( counter );
  };

  //Retomamos el estado y las funciones seteadoras
  return {
    counter, 
    increment, 
    decrement,
    reset
  };
};
