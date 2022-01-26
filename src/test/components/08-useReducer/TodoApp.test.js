import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixture/demoTodos';
import { act } from '@testing-library/react';


describe('Pruebas en el componente <TodoApp />', ()=> {
    //simulamos que el setItem fue ejecutado
    Storage.prototype.setItem = jest.fn(()=>{})

    //debe retornar el componente sin cambios en el render
    const wrapper = shallow(<TodoApp />);
    
    test('Debe mostrarse correctamente', ()=>{
        
        //debe mostrarse el componente sin cambios
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de agregar un TODO', () => {
        //montamos el componente y lo guardamos en la variable
        const wrapper = mount( <TodoApp /> );

        //ejecutamos la accion del de act
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });

        //comprobamos que el tamaño del arreglo es de luego de pasar dos TODOS
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');
        //comprobamos que el localstore fue llamado el set item las mismas cantidad que todos
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        
    });

    test('debe de eliminar un todo', () => {
        
        //simulamos agregar un todo con el handlleTodo y luego lo eliminamos con el handleDelete
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        //comprobamos que los TODO fueron removidos en el TodoApp
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 0 )');

    });

});