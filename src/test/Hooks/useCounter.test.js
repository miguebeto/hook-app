import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en el custom hook <useCounter />', ()=> {


    test('Debe retornar el valor por defecto', ()=>{

        //desestructuramos el result del renderizado del custom hook
        const { result } = renderHook(()=> useCounter());

        // console.log(result.current);

        //comprobamos que los valores y tipos de la funcion y estados sean los correctos
        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Debe tener el state en 100', ()=>{

        //desestructuramos el result del renderizado del custom hook
        const { result } = renderHook(()=> useCounter(100));
        
        // console.log(result.current);
        
        //comprobamos que los valores del estado sean los correctos
        expect(result.current.state).toBe(100);
    });
    
    test('Debe incrementar el state en 1', () => {

        //desestructuramos el result del renderizado del custom hook
        const { result } = renderHook(()=> useCounter(100));
        const { increment } = result.current;

        //permite ejecutar la accion de una función
        act(()=> {
            increment(2);
        })

        //desestructuramos el estado
        const { state } = result.current;

        //comprobamos que el valor del estado sea el valor inicial 100 + 1 = 101
        expect(state).toBe(102);
    });

    test('Debe decrementar el state 1', () => {

        //desestructuramos el result del renderizado del custom hook
        const { result } = renderHook(()=> useCounter(100));
        const { decrement } = result.current;

        //permite ejecutar la accion de una función
        act(()=> {
            decrement();
        })

        //desestructuramos el estado
        const { state } = result.current;

        //comprobamos que el valor del estado sea el valor inicial 100 + 1 = 101
        expect(state).toBe(99);
    });

    test('Debe resetear el estado en el estado inicial', () => {

        //desestructuramos el result del renderizado del custom hook
        const { result } = renderHook(()=> useCounter(100));
        const { increment, reset } = result.current;

        //permite ejecutar la accion de una función
        act(()=> {
            increment();
            reset();
        })

        //desestructuramos el estado
        const { state } = result.current;

        //comprobamos que el valor del estado sea el valor inicial 100 + 1 = 101
        expect(state).toBe(100);
    });
    

});