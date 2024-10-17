import "./styles/main.css";

function App() {
  const person = {
    name: "Felipe",
    age: 31,
    favoriteMovie: "Titanic",
    favoriteMusic: "Rock",
  };

  const { favoriteMusic } = person;

  return (
    <div className="App">
      <ul className="list">
        <li className="list__items">
          <span className="list__label">Nombre:</span>
          <span className="list__value">{person.name}</span>
        </li>
        <li className="list__items">
          <span className="list__label">Edad:</span>
          <span className="list__value">{person["age"]} anios</span>
        </li>
        <li className="list__items">
          <span className="list__label">Pelicula Favorita:</span>
          <span className="list__value">{person.favoriteMovie}</span>
        </li>
        <li className="list__items">
          <span className="list__label">Musica Favorita:</span>
          <span className="list__value">{favoriteMusic}</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
