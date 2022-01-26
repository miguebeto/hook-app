import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks }  from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

//simula el hooks evitando las llamadas al useFetch para no alterarlo
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en el componente <MultipleCustomHooks />', ()=> {
    //simulamos el retorno del hook con la valores que manda al estado inicial
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    })

    test('Debe mantenerse el componente sin cambios en el renderizado', ()=>{

       //simulamos el retorno de la data por defecto en el hook
       useFetch.mockReturnValue({
           data: null,
           loading: true,
           error: null
       })

       //debe retornar el componente sin cambios en el render
       const wrapper = shallow(<MultipleCustomHooks />);
       expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar la información', ()=>{

         //simulamos el retorno de la data traida de la api
       useFetch.mockReturnValue({
        data: [{
            author: 'Miguel',
            quote: 'Hola Mundo'
        }],
        loading: false,
        error: null
    });
        //guardamos el componente en la variable wrapper
        const wrapper = shallow(<MultipleCustomHooks />);

        console.log(wrapper.html());

        //comprueba que el loadin no se ejecutó verificando su className
        expect( wrapper.find('.alert').exists()).toBe(false);

        //comprueba que el className del párrafo que contiene .mb-0 tenga el texto 'Hola mundo' que se pasó en la simulación con mock
        expect( wrapper.find('.mb-2').text().trim()).toBe('Hola Mundo');

        //comprueba que el valor de la etiqueta footer es igual al valor que pasamo en el author de la simulación
        expect( wrapper.find("footer").text().trim()).toBe('Miguel');


        
    });
});