import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react'; 

import '../02-useEffect/effect.css';

export const Padre = () => {

    //creamos una constante con el valor de un arreglo de numeros
    const numeros = [2,4,6,8,10];

    //Creamos un estado con initialState en 0
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }
    
    //setea solomente el estado sin volver a rederizar el componente y sus console.log. (solamente cambia el valor)
    const incrementar = useCallback( (num)=> {
        //debe mandarse el estado anterior para que memorize sepa y no rederice nuevamente el componente
        setValor(valor=>  valor + num )
    }, [ setValor ] )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />
            {/* piteramos sobre el arreglo creado y pasamos los valores por props al componente hijo, tambien pasamos la funcion incrementar del use callback  */}
            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
