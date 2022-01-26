import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente <HomeScreen />', ()=> {

    //creamos el usario con la informacion que se va a proporcionar en el context para pruebas
    const user = {
        name: 'miguel',
        email: 'miguelangell1994@hotmail.com'
    };

    //debe retornar el componente sin cambios en el render, se usa el mount porque el shallow solo renderiza el componente padre
    const wrapper = mount(
        //utilizamos el UserContext para tener acceso al contexto creado
        <UserContext.Provider value={{
            user
        }}>
             <HomeScreen />
        </UserContext.Provider>
    );

    test('debe mantenerse el componente sin cambios en el renderizado', ()=>{
        //comprobamos que el componente se muestra correctamente
        expect(wrapper).toMatchSnapshot();
    });

});