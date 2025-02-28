import NoControlado from "./components/NoControlados";

// Hemos adicionado el CDN de bootstrap en el indexedDB.html en la parte del head
// lo hemos cogido desde la web de bootstrap https://getbootstrap.com/
// Content Delivery Network (Red de distribución de Contenidos)

const App = () => {
  return (
    <div className="container">
      <h1>Formularios</h1>
      <NoControlado />
    </div>
  );
};

export default App;
