import React, { useEffect, useState } from "react";
import { fullCharacters } from "../../services/service";

const Characters = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fullCharacters(setCharacters);
  });

  return (
    <>
      <div className="flex h-32 bg-black sm:h-80 items-center justify-center">
        <h1 className="text-3xl text-orange-500 hover:text-white sm:text-7xl font-bold">
          The Rick And Morty
        </h1>
      </div>
      <div className="flex flex-wrap justify-center ">
        {characters !== null ? (
          characters.map((character) => (
            <div
              className="sm:w-72 m-4 bg-stone-700 rounded-xl"
              key={character.id}
            >
              <div className="text-white text-center p-1 font-mono">
                <a
                  className="text-lg sm:text-xl hover:text-orange-500 font-bold"
                  href={`/characters/${character.id}`}
                >
                  {character.name}
                </a>
              </div>

              <img
                src={character.image}
                alt="#"
                className="h-52 sm:h-64 w-72 rounded-b-xl"
              />
            </div>
          ))
        ) : (
          <div className="text-base pt-12 bg-stone-700 w-full h-screen text-center sm:text-4xl font-sans font-bold text-white">
            Sorry, No Hay Personajes....!
          </div>
        )}
      </div>
    </>
  );
};

export default Characters;
