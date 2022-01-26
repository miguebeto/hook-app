import React from 'react'

//recibimos por props los valores del arreglo y la funcion seteadora para incrementar con useCallback, estas seran memorizadas por el memo
export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        // incrementa el numero segun el valor que pasemos en el arreglo sin volver a ejecutar el componente ni el console.log 
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
