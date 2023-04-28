import React, { useEffect, useState } from "react";
import { fullCharacters } from "../../services/service";

const Characters = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fullCharacters(setCharacters);
  });

  return (
    <>
      <div className="bg-stone-700 w-full h-full 2xl:h-screen">
        <div className="flex items-center justify-center font-bold text-orange-500 text-3xl h-32 bg-black sm:h-60 2xl:h-80">
          <h1 className=" hover:text-white sm:text-7xl ">The Rick And Morty</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {characters !== null ? (
            characters.map((character) => (
              <div
                className="grid grid-cols-4 bg-stone-800 mt-2 border rounded-md border-gray-500 w-80 h-18 sm:w-66 m-2"
                key={character.id}
              >
                <div className="flex items-center col-span-1 h-24 pl-1">
                  <img src={character.image} alt="#" className="rounded-full" />
                </div>
                <div className="flex items-center col-span-3 pl-3 text-xl text-orange-500 font-bold font-sans ">
                  <a
                    href={`/characters/${character.id}`}
                    className="hover:text-white"
                  >
                    {character.name}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-base pt-12 bg-stone-700 w-full h-screen text-center sm:text-4xl font-sans font-bold text-white">
              ¡Sorry. No hay personajes...!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Characters;
