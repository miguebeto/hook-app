import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en el componente <TodoAdd />', ()=> {

    //creamos el mock de la funcion
    const handleAddTodo = jest.fn();

    //debe retornar el componente sin cambios en el render
    const wrapper = shallow(<TodoAdd 
        handleAddTodo={ handleAddTodo }
    />);

    test('Debe mostrarse correctamente', ()=>{

        //comprobamos que el componente se muestra correctamente
        expect(wrapper).toMatchSnapshot(); 

    });

    test('No debe llamar llamar el handleAddTodo', ()=>{

        //guardamos la función onSubmit en la variable
        const formSubmit = wrapper.find('form').prop('onSubmit');

        //ejecutamos la función pasando como parámetro el evento como funcion
        formSubmit({ preventDefault(){}});

        //comprueba que la funcion que agrega los todo no se ejecuta porque el formulario tiene valor <= 1 o no tiene valor
        expect(handleAddTodo).toHaveBeenCalledTimes(0); 

    });

    test('debe llamar la funcion handleAddTodo', () => {
      
        const value = 'Aprender React';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        //guardamos la función onSubmit en la variable
        const formSubmit = wrapper.find('form').prop('onSubmit');

        //ejecutamos la función pasando como parámetro el evento como funcion
        formSubmit({ preventDefault(){}});

        //comprueba que la funcion que agrega los todo se ejecutó una vez por el cambio del valor
        expect(handleAddTodo).toHaveBeenCalledTimes(1); 

        //comprueba que la funcion fue llamada con un objeto
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); 

        //comprueba que la funcion fue llamada con un objeto con las especificaciones dadas
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        }); 

        //comprobamos que el value del input se encuentra vacion luego de ejecutado el reset()
        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
});