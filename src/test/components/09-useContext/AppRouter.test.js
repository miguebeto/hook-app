import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente <AppRoute />', ()=> {

     //creamos el usario con la informacion que se va a proporcionar en el context para pruebas
     const user = {
        id: 1,
        name: 'Miguel'
    };


    //debe retornar el componente sin cambios en el render
    const wrapper = mount(
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe mantenerse el componente sin cambios en el renderizado', ()=>{

        //comprueba que el componente se muestra correctamente
        expect(wrapper).toMatchSnapshot();
    });
});