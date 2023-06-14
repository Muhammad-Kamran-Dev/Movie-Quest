import { useState } from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
const Header = ({ setSearch }) => {
  const [movie, setMovie] = useState("");
  const onchangeHandler = (event) => {
    setMovie(event.target.value);
    setSearch(movie);
  };
  return (
    <header className="header">
      <div className="AppName"> Movie Quest </div>
      <div className="icon-with-search">
        <input
          type="text"
          placeholder="Enter Movie name"
          value={movie}
          onChange={onchangeHandler}
        />

        <AiOutlineSearch height={24} width={24} className="icon" />
      </div>
    </header>
  );
};

export default Header;
