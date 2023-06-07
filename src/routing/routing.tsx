import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/catalog";
import Favorites from "../pages/favorites";
import ErrorPage from "../pages/error/error";

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Routing;
