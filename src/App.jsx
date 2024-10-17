import { PersonalInfo } from "./components/PersonalInfo";
import "./styles/main.css";

function App() {
  const person = {
    name: "Felipe",
    age: 31,
    favoriteMovie: "Blancanieves",
    favoriteMusic: "Rock",
  };

  const person2 = {
    name: "Monica",
    age: 57,
    favoriteMovie: "Blancanieves",
    favoriteMusic: "Rock",
  };

  const person3 = {
    name: "Angie",
    age: 21,
    favoriteMovie: "Best",
    favoriteMusic: "Baladas",
  };

  return (
    <div className="App">
      <PersonalInfo persona={person} color="red" />
      <PersonalInfo persona={person2} color="blue" />
      <PersonalInfo persona={person3} color="green" />
    </div>
  );
}

export default App;
