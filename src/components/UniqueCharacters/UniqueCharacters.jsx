import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uniqueCharacters } from "../../services/service";

const UniqueCharacters = () => {
  const [unique, setUnique] = useState(null);
  useEffect(() => {
    uniqueCharacters(params.id, setUnique);
  });
  const params = useParams();
  return (
    <>
      <div className="bg-stone-700 w-full h-screen ">
        {unique != null ? (
          <div className="flex flex-col items-center ">
            <div className="flex justify-center items-center w-full h-28 font-bold text-2xl mb-10 bg-black text-orange-600 sm:h-48 sm:text-7xl md:h-64 ">
              <h1 className="hover:text-white">The Rick And Morty</h1>
            </div>
            <div className=" grid grid-cols-4 border bg-stone-800 rounded-lg border-gray-500 w-80 h-20 sm:w-2/5 sm:h-40 md:w-1/3 md:h-32 xl:h-36 xl:w-1/3">
              <div className="flex items-center ">
                <img
                  src={unique.image}
                  alt="#"
                  className="w-16 mx-1 rounded-full sm:w-32 md:w-32"
                />
              </div>
              <div className=" flex flex-col justify-around col-span-3 pl-1 text-white  md:pl-4">
                <p className="text-lg font-bold text-orange-600 hover:text-black sm:text-2xl">
                  {unique.name}
                </p>
                <p className="font-light  sm:text-xl">
                  Especie:{" "}
                  <span className="font-bold hover:text-orange-500 sm:text-xl">
                    {unique.species}
                  </span>
                </p>
                <p className="font-light sm:text-xl">
                  Genero:{" "}
                  <span className="font-bold hover:text-orange-500 sm:text-xl">
                    {unique.gender}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className=" flex w-full h-1/4  justify-center items-center text-orange-500 text-lg font-sans font-bold sm:text-xl md:text-3xl">
            ¡Sorry. No hay personajes...!
          </div>
        )}
      </div>
    </>
  );
};

export default UniqueCharacters;
