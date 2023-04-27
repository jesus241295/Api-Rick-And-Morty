import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uniqueCharacters } from "../../services/service";

const UniqueCharacters = () => {
  const [unique, setUnique] = useState(null);
  useEffect(() => {
    uniqueCharacters(params.id, setUnique);
  }, []);
  const params = useParams();
  return (
    <>
      <div className="font-sans w-full bg-slate-900 max-w-screen-2xl">
        {unique != null ? (
          <div className="text-zinc-50">
            <h2 className="">Personaje con el id {params.id}</h2>
            <p>Con el nombre de {unique.name} </p>
            <img src={unique.image} alt="#" />
          </div>
        ) : (
          "No hay personaje"
        )}
      </div>
    </>
  );
};

export default UniqueCharacters;
