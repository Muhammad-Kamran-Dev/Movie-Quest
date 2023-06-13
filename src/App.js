import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import CardWrapper from "./components/CardWrapper/CardWrapper";

const App = () => {
  return (
    <div className="app">
      <Header />
      <CardWrapper />
    </div>
  );
};

export default App;
