import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente <LoginScreen />', ()=> {

    //creamos el mock de la funcion que setea el estado
    const setUser = jest.fn()
    

    //debe retornar el componente sin cambios en el render
    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    );



    test('debe mantenerse el componente sin cambios en el renderizado', ()=>{
        //comprobamos que no hay cambios en el componente
        expect(wrapper).toMatchSnapshot();
    });

    test('debe ejecutar el setUser con el argumento esperado', ()=>{

        //hacemos la simulacion del evento onClick
        wrapper.find('button').prop('onClick')();

        //comprobamos que la funcion setea el estado con el objeto por defecto
        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Miguel'
        });

    });

});