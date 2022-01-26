import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef }  from '../../../components/04-useRef/RealExampleRef';
// import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';

describe('Pruebas en <RealExampleRef />', ()=> {
    //debe retornar el componente sin cambios en el render
    const wrapper = shallow(<RealExampleRef />);


    test('Debe mostrarse correctamente', ()=>{

        //tomamos la foto del componente como se muestra originalmente
        expect(wrapper).toMatchSnapshot();
        //comprobamos que el componente no se debe mostrar inicialmente
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
        
    });
    
    test('Debe mostrarse el componente <MultipleCustomHook /> al dar click en el boton', ()=>{

        //similamos dar click en el boto
        wrapper.find('button').simulate('click');
        //comprobamos que el component se encuentra renderizado
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});