import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effect.css";

export const FormWithCustomHook = () => {
  //traemos el custom hook con initial state de un objeto que guardará el nombre, email y password
  const [ formValues, handleInputChange ] = useForm({
    name: "",
    email: "",
    password: '',
  });

  //desestructuramos el name, email y password del estado
  const { name, email, password } = formValues;

  //se establece efecto secundario para cuando el email cambia
  useEffect(()=>{
    console.log('Email cambió');
  }, [ email ]);

  //previene que se actualice la pagina cuando se envian los datos del formulario
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log( formValues );
  };

  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormWithCustomHook</h1>
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
          onChange={ handleInputChange }
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
          onChange={ handleInputChange }
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="******"
          value={ password }
          onChange={ handleInputChange }
        />
      </div>
        {/* Activa el handle input evitando refrescar la pagina y mandando por consola valor del estado */}
        <button type="submit" className="btn btn-primary">
            Guardar
        </button>

    </form>
  );
};
