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
  const [misPeliculas, setMisPeliculas] = useState([
    "Apocalipsis",
    "La ventana indiscreta",
    "Forrest Gump",
    "Terciopelo azul",
  ]);
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
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <input
            type="text"
            value={nuevaPelicula}
            onChange={(e) => setNuevaPelicula(e.target.value)}
            placeholder="Nueva Pelicula..."
            style={{ flex: 1, padding: "8px" }}
          />

          <button
            onClick={agregarPelicula}
            style={{
              marginLeft: "10px",
              padding: "8px 15px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Agregar Película
          </button>
        </div>

        {misPeliculas.map((pelicula, index) => (
          <Pelicula key={index} titulo={pelicula} />
        ))}
      </div>
    </div>
  );
}

export default App;
