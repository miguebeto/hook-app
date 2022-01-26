import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en el componente <HookApp />', ()=> {


    test('Debe mantenerse el componente sin cambios en el renderizado', ()=>{

        //debe retornar el componente sin cambios en el render
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
});