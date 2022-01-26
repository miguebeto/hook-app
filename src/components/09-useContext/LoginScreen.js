import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  //extraemos el estado y la funcion seteadora que provee el componente main mediante el context
  const {user, setUser} = useContext(UserContext);

  return (
      <div>
          <h1>Login Screen </h1>
          <hr />
          <button 
            className='btn btn-primary'
            onClick={ ()=> setUser({
              ...user,
              id: 123,
              name: 'Miguel',
            })}
            >
              Login
          </button>
      </div>
  )
};
