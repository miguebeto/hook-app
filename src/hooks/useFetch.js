import { useEffect, useRef, useState } from "react"; 

export const useFetch = (url) => {
  //Creamos una referencia con valor inicial en true
  const isMounted = useRef(true);

  //Creamos un esatdp con initial state de un objeto que tiene data, loading y error
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  //pasamos la referencia a false cuando se carga el componente 
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  //setea el estado a loading true cada vez que se haga un peticion que cambia el loading por el resultado del fetch que se ejecuta cuando la url cambia, la url se pasa por props
  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("setState no se llamó");
        }
      })
      .catch(()=> {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info'
        })
      })
  }, [url]);

  //Retormamos el estado correspondiente al objeto con lo valores resultados del fetch
  return state;
};
