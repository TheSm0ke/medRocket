import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/catalog";
import Favorites from "../pages/favorites";

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Routing;
