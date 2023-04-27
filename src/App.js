import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters/Characters";
import UniqueCharacters from "./components/UniqueCharacters/UniqueCharacters";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters></Characters>}></Route>
          <Route
            path="/characters/:id"
            element={<UniqueCharacters></UniqueCharacters>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
