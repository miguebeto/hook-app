import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixture/demoTodos";

describe("pruebas en el componente <TodoList />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("debe de mostrar el compnenete correctamente", () => {
    //comprobamos que el componente no tiene modificaciones en el render
    expect(wrapper).toMatchSnapshot();

  });

  test('debe tener dos <TodoListItem />', () => {
      
    //comprobamos que el el TodoListItem tiene el tamaño asignado en demoTodos
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

    //comprobamos que la propiedad handleDelete fué pasada como parámetro de TodoListItem y es un funcion
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));

  });
  

});
