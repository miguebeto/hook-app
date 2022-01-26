import { useFetch } from "../../hooks/useFetch";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetch", () => {
  test("Debe retornar la informacion por defecto", () => {
    //hacemos uso del custom hook mandándole como parámetro el url de la api utilizada
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );

    // desestructuramos...
    const { data, loading, error } = result.current;

    //comprobamos que los valores sean los establecidos por defecto
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("debe de tener la info deseada, loading false, error false", async () => {
    //hacemos uso del custom hook mandándole como parámetro el url de la api utilizada
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );

    //esperamos que el hook mande una respuesta de manera asíncrona y se obtenga el siguiente estado como respuesta de la api
    await waitForNextUpdate();

    //desestructuramos...
    const { data, loading, error } = result.current;
    // console.log(data);

    //comprobamos que la informacion obtenida sea la correcta
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
  test("debe manejar el error", async () => {
    //hacemos uso del custom hook mandándole como parámetro el url de la api que maneja los errores en url
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/apid/users?page=2")
    );

    //esperamos que el hook mande una respuesta de manera asíncrona y se obtenga el siguiente estado como respuesta de la api
    await waitForNextUpdate();

    //desestructuramos...
    const { data, loading, error } = result.current;
    // console.log(data);

    //comprobamos que la informacion obtenida sea la correcta
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("No se pudo cargar la info");
  });
});
