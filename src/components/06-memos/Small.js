import React, { memo } from 'react';

//Memoriza el componente y solo permite renderizar cuando las propiedades del componente cambian
export const Small = memo(({value }) => {

    console.log('Me volví a llamar :(');

    return (
        <div>
            <small>{ value }</small>
        </div>
    )
})
