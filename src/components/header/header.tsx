import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="catalog">
        <Link to="/catalog">Каталог</Link>
      </div>
      <div className="favorites">
        <Link to="/favorites">Избранное</Link>
      </div>
    </div>
  );
};

export default Header;
