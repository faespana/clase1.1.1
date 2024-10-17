export const PersonalInfo = ({ persona, color }) => {
  const objStyle = {
    backgroundColor: color,
  };

  return (
    <ul className="list" style={objStyle}>
      <li className="list__items">
        <span className="list__label">Nombre:</span>
        <span className="list__value">{persona.name}</span>
      </li>
      <li className="list__items">
        <span className="list__label">Edad:</span>
        <span className="list__value">{persona.age}</span>
      </li>
      <li className="list__items">
        <span className="list__label">Pelicula Favorita:</span>
        <span className="list__value">{persona.favoriteMovie}</span>
      </li>
      <li className="list__items">
        <span className="list__label">Musica Favorita:</span>
        <span className="list__value">{persona.favoriteMusic}</span>
      </li>
    </ul>
  );
};
