import React from 'react';

//memoriza el estado para saber cuando cambió solo el estado
export const ShowIncrement = React.memo(({ increment }) => {
    //Mandamos un console log para verificar que solo se ejecuta una vez cargado el componente y no cuando cambia el valor del estado
    console.log('Me volví a generar :(');

    return (
        <div>
            {/* incrementa el valor de estado en 5 */}
            <button className='btn btn-primary' onClick={ ()=> increment(5) }>Incrementar</button>
        </div>
    )
})
