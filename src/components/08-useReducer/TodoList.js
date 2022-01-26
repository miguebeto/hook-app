import React from "react";
import { TodoListItem } from "./TodoListItem";

//listamos los todo mapeando el arreglo de todo y pasándolo al componente TodoLisItem
export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <TodoListItem
            key={ todo.id }
            todo={todo}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};
