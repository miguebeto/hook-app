import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en el componente <HookApp />', ()=> {

    const initialForm = {
        name: 'Miguel',
        email: 'miguelangell1994@hotmail.com'
    };

    test('Debe regresar un formulario por defecto', ()=>{
        
        //desestructuramos ...
        const { result } = renderHook(()=> useForm(initialForm));
        const [ values, handleInputChange, reset ] = result.current;
        
        // console.log(result.current);
        
        //comprueba que el arreglo obtenido de nuestro hook useForm retorna un objeto en la primera posicion del arreglo con lo que se pasa por parámetro a la funcion
        expect(values).toEqual(initialForm);
        
        //comprueba que el arreglo obtenido de nuestro hook useform retorna en las posicion 1 y 2 n objeto de tipo funcion
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
       
    });
    
    test('Debe cambiar el valor del formulario (cambiar name)', ()=>{
        
        //desestructuramos ...
        const { result } = renderHook(()=> useForm(initialForm));
        const [ , handleInputChange ] = result.current;
        
        //utilizamos la accion para ejecutar los cambios en el hook
        act(()=> {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Marcela'
                }
            })
        });
        
        const [ values ] = result.current;

        //comprobamos que los valores son iguales a los esperados
        // console.log(values);
        expect(values).toEqual({
            ...initialForm,
            name: 'Marcela'
        });
 
    });

    test('Debe reestablecer el formulario con el reset', ()=>{
        //desestructuramos ...
          const { result } = renderHook(()=> useForm(initialForm));
          const [ values ,handleInputChange , reset ] = result.current;
          
        //utilizamos la accion para ejecutar los cambios en el hook
          act(()=> {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Marcela'
                }
            });
              reset();
          });
          
        //comprobamos que los valores son iguales a los esperados
        //   console.log(values);
          expect(values).toEqual(initialForm);
   
    });

});