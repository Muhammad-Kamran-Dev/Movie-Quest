import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <header className="header">
      <div className="AppName"> Movie Lane</div>
      <div className="icon-with-search">
        <input type="text" placeholder="Enter Movie name" />

        <AiOutlineSearch height={24} width={24} className="icon" />
      </div>
    </header>
  );
};

export default Header;
