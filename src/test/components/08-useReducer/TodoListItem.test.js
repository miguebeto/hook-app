import React from "react";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixture/demoTodos";
//le especifica a jest que el tipo de dato es una funcion
const handleDelete = jest.fn();
const handleToggle = jest.fn();

//creamos el wrapper llamando al componente y agregando las props requeridas
const wrapper = shallow(
  <TodoListItem
    todo={demoTodos[0]}
    index={0}
    handleDelete={handleDelete}
    handleToggle={handleToggle}
  />
);

describe("pruebas en <TodoListItem />", () => {
  test("deebe mostrarse correctamente", () => {
    //comprueba que el componente no tiene modificaciones en el renderizado
    expect(wrapper).toMatchSnapshot();
  });

  test("debe llamar la funcion handleDelete", () => {
    //simulamos el evento onClick del botton
    wrapper.find("button").simulate("click");

    //comprobamos que la funcion fué llamada con el id del Todo a eliminar correcto
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe llamar la funcion handleToggle", () => {
    //simulamos el evento onClick de la etiqueta párrafo
    wrapper.find("p").simulate("click");

    //comprobamos que la funcion fué llamada con el id correspondiente al Todo que se le cambiará el toggle
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe mostrar el texto correctamente", () => {
    //guardamos el texto del parrafo en la variable p
    const p = wrapper.find("p").text().trim();

    // console.log(p);

    //comprobamos que la variable p es igual al index concatenado con el texto del primer Todo
    expect(p).toBe(`1. ${demoTodos[0].desc}`);
  });

  test("debe tener la clase complete si el todo.done está en true", () => {
    //creamos una variable donde guardamos el primer todo del estado ic¿nicial
    const todo = demoTodos[0];
    //cambiamos el valor del done a true
    todo.done = true;

    //lo agregamos el todo en la llamada del componente con shallow y lo guardamos en una variable
    const wrapper = shallow(<TodoListItem todo={todo} />);

    console.log(wrapper.find('p').prop('className'));

    //comprobamos que se encuentra renderizando el parrafo con el className complete que se ejecuta cuando el done es true
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
    // expect(wrapper.find('p').prop('className')).toBe('complete');
  });
});
