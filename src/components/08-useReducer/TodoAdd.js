import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => { 
  //pasamos en el initial state un objeto con la propiedad description con valor "", y la estraemos del estado 
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  //   console.log(description)

  //creamo el manejar del evento onSubmit que verifica primeramente si la propiedad description es menos <= 1, y si es mayor setea el newTodo y resetea los valores
  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };
  
      handleAddTodo(newTodo);
      reset();

  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary mt-1 btn-block">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};
