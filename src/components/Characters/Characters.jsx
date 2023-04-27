import React, { useEffect, useState } from "react";
import { fullCharacters } from "../../services/service";

const Characters = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fullCharacters(setCharacters);
  });

  return (
    <>
      <div className="content">
        <h1>Rick And Morty</h1>
      </div>
      <div className="card">
        {characters != null
          ? characters.map((character) => (
              <div className="content-personaje" key={character.id}>
                <div className="content-title">
                  <a href={`/characters/${character.id}`}>{character.name}</a>
                </div>
                <div className="content-card-image">
                  <img
                    src={character.image}
                    alt="#"
                    className="imagen-inicio"
                  />
                </div>
              </div>
            ))
          : "no hay personajes"}
      </div>
    </>
  );
};

export default Characters;
