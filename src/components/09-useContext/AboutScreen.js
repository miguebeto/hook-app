import React, { useContext } from 'react';
import { UserContext } from './UserContext';


export const AboutScreen = () => {

  //extraemos el user y la funcion de seteo setUser que nos manda el proveedor en el main app
  const {user, setUser} = useContext(UserContext);

  //creamos la funcion que setea el estado a un objeto vacio cuando se da click en el botón
  const handleClick = () => {
    setUser({});
  }

  return (
       <div>
          <h1>About Screen</h1>
          <hr />
          <pre>
            { JSON.stringify(user, null, 3) }
          </pre>
          <button 
          className='btn btn-warning'
          onClick={ handleClick }
          >
             Logout
          </button>
      </div>
  )
};
