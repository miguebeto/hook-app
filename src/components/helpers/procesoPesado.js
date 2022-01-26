//creamos un proceso pesado de iterar la cantidad de correspondiente al numero que se pasa por props
export const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log("Ahí vamos....");
    }
    return `${iteraciones} realizadas`;
  };