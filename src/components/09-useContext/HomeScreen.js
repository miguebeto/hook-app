import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => { 
  //extraemos el estado del context mediante el useContext y lo mostramos como objeto en pantalla con la etiqueta <pre>
  const {user} = useContext(UserContext);
  console.log(user);
  
  return (
      <div>
          <h1>Home Screen</h1>
          <hr />

          <pre>
            { JSON.stringify( user, null, 3 ) }
          </pre>
      </div>
  )
};
