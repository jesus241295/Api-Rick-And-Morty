import React, { useEffect, useState } from "react";
import { fullCharacters } from "../../services/service";

const Characters = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fullCharacters(setCharacters);
  });

  return (
    <>
      <div className="flex bg-black h-96 items-center justify-center">
        <h1 className="text-orange-500 hover:text-white text-8xl font-bold">
          Rick And Morty
        </h1>
      </div>
      <div className="flex flex-wrap justify-center ">
        {characters !== null ? (
          characters.map((character) => (
            <div
              className="w-72 m-4 bg-stone-700 rounded-xl"
              key={character.id}
            >
              <div className="text-white text-center p-1 font-mono">
                <a
                  className="text-xl hover:text-orange-500 font-bold"
                  href={`/characters/${character.id}`}
                >
                  {character.name}
                </a>
              </div>
              <div>
                <img
                  src={character.image}
                  alt="#"
                  className="h-64 w-72 rounded-b-xl"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="bg-stone-700 w-full h-screen text-center text-6xl font-sans font-bold text-white">
            Sorry, No Hay Personajes....!
          </div>
        )}
      </div>
    </>
  );
};

export default Characters;
