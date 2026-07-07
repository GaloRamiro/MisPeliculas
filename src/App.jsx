import { useState } from "react";
import "./App.css";

function Pelicula({ titulo }) {
  const [esFavorita, setEsFavorita] = useState(false);
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "5px",
        cursor: "pointer",
      }}
      onClick={() => setEsFavorita(!esFavorita)}
    >
      <p>
        {titulo} {esFavorita ? "⭐" : ""}
      </p>
    </div>
  );
}

function App() {
  const [misPeliculas, setMisPeliculas] = useState([]);
  const [nuevaPelicula, setNuevaPelicula] = useState("");
  function agregarPelicula() {
    if (nuevaPelicula.trim() === "") {
      return;
    } else {
      setMisPeliculas([...misPeliculas, nuevaPelicula]);

      setNuevaPelicula("");
    }
  }
  return (
    <div>
      <h1>Mis Películas Favoritas</h1>

      <div>
        <input
          type="text"
          value={nuevaPelicula}
          onChange={(e) => setNuevaPelicula(e.target.value)}
          placeholder="Nueva tarea..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={agregarPelicula}>Agregar Pelicula</button>
        {misPeliculas.map((tarea, index) => (
          <Pelicula key={index} titulo={tarea} />
        ))}
      </div>
    </div>
  );
}

export default App;
