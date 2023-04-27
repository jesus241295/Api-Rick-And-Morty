import axios from "axios";

const fullCharacters = async (state) => {
  const res = await axios.get("https://rickandmortyapi.com/api/character");

  state(res.data.results);
};

const uniqueCharacters = async (id, state) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  state(res.data);
};
export { fullCharacters, uniqueCharacters };
