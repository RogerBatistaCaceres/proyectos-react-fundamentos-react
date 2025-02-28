import Controlado from "./components/Controlados";
import Cat from "./components/Cat";
import NoControlado from "./components/NoControlados";

// Hemos adicionado el CDN de bootstrap en el indexedDB.html en la parte del head
// lo hemos cogido desde la web de bootstrap https://getbootstrap.com/
// Content Delivery Network (Red de distribución de Contenidos)

const App = () => {
  return (
    <div className="container">
      <h1>Formularios</h1>
      {/* Ejemplo de formularios No controlados
      <NoControlado />
      */}
      {/* Ejemplo de formularios Controlados
      <Controlado />
      // Ejemplo con el Spread operator ... para hacer copia de un objeto
      <Cat />
      */}
      <Controlado />
    </div>
  );
};

export default App;
