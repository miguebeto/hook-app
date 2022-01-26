import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
  //creamos el estado con initialState de un objeto vacio {} el cual será pasado por el value a los consumidores que haran los cambios
  const [user, setUser] = useState({}); 

  return (
      <UserContext.Provider value={ { 
        user,
        setUser,
       } }>
        <AppRouter />
      </UserContext.Provider>
  )
};
