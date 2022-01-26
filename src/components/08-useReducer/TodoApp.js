import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

import "./styles.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; 
//   return [
//     {
//       id: new Date().getTime(),
//       desc: "Aprender React",
//       done: false,
//     },
//   ];
};

//creamo el todo app extrayendo los todos y el funcion seteadora dispatch
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  //   console.log(todos);

  //creamos el efecto que manda al storage los todos cada vez que cambian
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])

  //elimina en el reducer los todos que coincidad con id pasado en el payload
  const handleDelete = (todoId) => {
      console.log(todoId);

      const action = {
        type: "delete",
        payload: todoId
      };

      dispatch(action)

  }

  //cambia el valor del done de los todos que coincidan con el id pasado en el payload
  const handleToggle = ( todoId ) => {
    dispatch({
        type: 'toggle',
        payload: todoId
    })
  }

  //agrega un nuevo todo al reducer con el uso del dispatch
  const handleAddTodo = ( newTodo ) => {
  
      dispatch({
        type: "add",
        payload: newTodo,
      });
  }

  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={ todos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
          />
        </div>
        <div className="col-5">
          <TodoAdd  
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>
    </div>
  );
};
