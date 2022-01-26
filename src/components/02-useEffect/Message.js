import React, { useEffect, useState } from 'react'

export const Message = () => {
    //Creamos un estado con un objeto de initialstate que contiene X y Y
    const [coords, setCoords] = useState({ x:0, y:0 });

    //Desestructuramos los valores para su facil uso
    const {x, y} = coords;

    //setea el valor del estado agregando un nuevo objeto con los valores del vector e.x en x y e.y en y
    useEffect(() => {

        const mouseMove = (e)=> {
            const coords = { x: e.x, y: e.y };
            setCoords( coords );
        }

        //crea un evento que recive el valor de x y y de donde se encuentra el mouse y la psas a la funcion que hace uso
        window.addEventListener('mousemove', mouseMove);

        return () => {
            //remueve el evento cuando el componente es desmontado
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    
    return (
        <div>
            <h3> Eres Genial!! </h3>
            <p> x: { x } y: { y }</p>
        </div>
    )
}
