import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effect.css';

export const CallbackHook = () => {

    //creamos un estado con initialstate en 10
    const [counter, setCounter] = useState(10);

    // const increment =()=>{
    //     setCounter( counter + 1 )
    // }
    
    //setea solomente el estado sin volver a rederizar el componente y sus console.log. (solamente cambia el valor)
   const increment = useCallback((num)=> {
        setCounter( c=> c + num  )
    }, [ setCounter ])

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />
            {/* pasamos la funcion que incrementa el valor del state a un compente donde se encuentra el boton que la ejecuta  */}
            <ShowIncrement increment={ increment } />
        </div>
    )
}
