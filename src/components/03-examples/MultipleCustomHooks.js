import React from "react";
import { useCounterQuotes } from "../../hooks/useCounterQuotes";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effect.css";

export const MultipleCustomHooks = () => {

  //traemos el custom hook con el estado y la funcion que incrementa en 1 el valor del estado
  const { counter, increment } = useCounterQuotes(1);

  //traemos elcustom hook del fetch pasandole la url de la api y desestructurando la data y el loading
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${ counter }`
  );

  //Desestructuramos author de y quote de la data en caso de que tenga valor
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {/* si loading es true mandamos el texto loading de contrario mandamos el quote y el author */}
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-2"> {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}
      {/* presionamos el boton para icrementar el valor del id correspodiente a cada quote  */}
      <button onClick={ increment } className="btn btn-primary">Siguiente quote</button>
    </div>
  );
};
