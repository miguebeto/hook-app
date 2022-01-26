import React from "react"; 

//mostramos el todo con estilo de linea en en medio cuando el todo se encuentre completado y cuando no se muestra normal. se agregan funciones para cambiar(!completado) y eliminar TODO
export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
      <li className="list-group-item" key={todo.id}>
        <p
          className={`${todo.done && "complete"}`}
          onClick={() => handleToggle(todo.id)}
        >
          {index + 1}. {todo.desc}
        </p>
        <button
          onClick={() => handleDelete(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>
  );
};
