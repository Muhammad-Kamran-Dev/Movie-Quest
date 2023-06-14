import { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import CardWrapper from "./components/CardWrapper/CardWrapper";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <CardWrapper search={search} />
    </div>
  );
};

export default App;
