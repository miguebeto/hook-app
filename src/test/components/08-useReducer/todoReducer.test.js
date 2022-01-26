import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixture/demoTodos";

describe("pruebas en todoReducer", () => {
  test("debe retornar el estado por defecto", () => {
    //le pasamos el initialState a nuestro reducer
    const state = todoReducer(demoTodos, {});
    //comprobamos que el estado es igual al estado inicial que mandamos
    expect(state).toEqual(demoTodos);
  });

  test("debe agregar un TODO", () => {
    //creamos el nuevo todo con la misma estructura del demoTodos
    const newTodo = {
      id: 1,
      desc: "Aprender Express",
      done: true,
    };

    //creamos la action que será mandada en el segundo parámetro del reducer
    const action = {
      type: "add",
      payload: newTodo,
    };

    //le pasamos el initialState y la action a nuestro reducer
    const state = todoReducer(demoTodos, action);

    // console.log(state);

    //comprobamos que fue agregado el nuevo objeto a nuestro reducer
    expect(state.length).toBe(3);
    //comprobamos que el estado es igual a los estados anteriores mas el nuevo estado
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("debe borrar un Todo", () => {
    //creamos la action que será mandada en el segundo parámetro del reducer
    const action = {
      type: "delete",
      payload: 2,
    };

    //le pasamos el initialState a nuestro reducer
    const state = todoReducer(demoTodos, action);

      console.log(state)

    //comprobamos que fue eliminado un objeto en el estado inicial o demoTodos
    expect(state.length).toBe(1);

    //comprobamos que todo que quedó en estado es el correcto
    expect(state).toEqual([demoTodos[0]]);
  });

  test("debe hacer el toggle del TODO", () => {
    //creamos la action que será mandada en el segundo parámetro del reducer
    const action = {
      type: "toggle",
      payload: 2,
    };

    //le pasamos el initialState y la action a nuestro reducer
    const state = todoReducer(demoTodos, action);

    // console.log(state);

    //comprobamos que la propiedad done del estado con el id del actioné fue cambiada a true
    expect(state[1].done).toBe(true);

    //comprobamos que todo que quedó en estado que queda en el reducer se mantiene igual
    expect(state[0]).toEqual(demoTodos[0]);
  });
});
