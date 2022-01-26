import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounterQuotes } from "../../hooks/useCounterQuotes";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounterQuotes(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize( pTag.current.getBoundingClientRect() )
  }, [quote]);


  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={ pTag } className="mb-2"> {quote} </p>
      </blockquote>
      <pre>
          { JSON.stringify(boxSize, null, 3) }
      </pre>
      <button onClick={increment} className="btn btn-primary">
        Siguiente quote
      </button>
    </div>
  );
};
