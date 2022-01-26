import React, { useEffect, useState } from "react";
import "./effect.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  //creamos un estado con un objeto de initialstate que contiene el name y el email
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  //extraemos el name y el email del estado inicial para su facil uso
  const { name, email } = formState;

  //Adicionamos efectos para cuando cargue el componente
  useEffect(() => {
    // console.log("hey!");
  },[]);

  useEffect(() => {
    // console.log("formState cambió");
  },[formState]);

  useEffect(() => {
    // console.log("Email cambió");
  },[email]);

  //setea el valor del estado agregando el name para cada caso (name o email) y el valor de entrada en cada input
  const handleInputChange = ({ target }) => {
    console.log(target.name);
    console.log(target.value);
    setFormState({
        ...formState,
        [ target.name ]: target.value
    })
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      
      {/* cada input lleva de valor la propiedad desestructurada name(segun cada caso) y de value el valor que se digita en el input */}
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={ name }
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="@email@gmail.com"
          autoComplete="off"
          value={ email }
          onChange={handleInputChange}
        />
      </div>
      {/* Si el valor del name es 123 manda el componente mensaje  */}
      { ( name === '123' ) && <Message /> }
    </>
  );
};
