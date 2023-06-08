import { Link } from "react-router-dom";
import "./header.scss";
import { useState } from "react";

const Header = () => {
  const [backgroudCatalog, setBackgroundCatalog] = useState({});
  const [backgroudFavorites, setBackgroundFavorites] = useState({});

  const handleClick = (itCatalog: boolean) => {
    if (itCatalog) {
      setBackgroundCatalog({ backgroundColor: "#EDF9FF", color: "#117DC1" });
      setBackgroundFavorites({ backgroundColor: "white", color: "black" });
    } else {
      setBackgroundCatalog({ backgroundColor: "white", color: "black" });
      setBackgroundFavorites({ backgroundColor: "#EDF9FF", color: "#117DC1" });
    }
  };

  return (
    <div className="header">
      <Link
        id="catalog"
        onClick={() => handleClick(true)}
        to="/catalog"
        style={backgroudCatalog}
        className="header-link">
        Каталог
      </Link>
      <Link
        id="favorites"
        onClick={() => handleClick(false)}
        className="header-link"
        style={backgroudFavorites}
        to="/favorites">
        Избранное
      </Link>
    </div>
  );
};

export default Header;
