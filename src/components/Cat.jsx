import { useState } from "react";

// Ejemplo de uso del Spread operator
// spread <spred>: derramar, desparramar, extender, propagar

const Cat = () => {
  const [cat, setCat] = useState({
    name: "Dexter",
    year: 5,
  });

  const handleClick = () => {
    // console.log("me diste click");

    // Como modifico solo la propiedad year?
    // setCat({ year: cat.year + 1 }); // pero no me mantiene el nombre ..

    // para mantener el nombre puede ser, escribirlo ..., pero es muy tedioso
    // enviarle el nombre, para lo cual podemos utilizar el spread operator
    // setCat({ name: "Dexter", year: cat.year + 1 });

    // usando el spread operator, le digo, has una copia de todo lo que tenga cat
    // con la expresión "...cat", y actualizar el valor de year..
    // setCat({ ...cat, year: cat.year + 1 });

    // hay otra opción usando una función de flecha con los datos anteriores "previos"
    // Importante: las funciones de flecha si utilizo las llaves {} quiere decir que voy a
    // escribir lógica (no estoy haciendo el return de un objeto). Por lo que si quiero hacer el
    // return de un objeto tendría que usar los parentesis (), y dentro poner la llaves {}
    // y con eso con los paréntesis le estoy diciendo que voy a retornar un objeto.
    setCat((prev) => ({ ...prev, year: cat.year + 1 }));
  };

  return (
    <>
      <h2>
        {cat.name} - {cat.year}
      </h2>
      <button onClick={handleClick} className="btn btn-dark mb-2">
        Update year
      </button>
    </>
  );
};

export default Cat;
