import { Routes, Route } from "react-router-dom";
import Catalog from "./catalog";
import Favorites from "./favorites";

const App = () => {
  return (
    <div id="root">
      <Routes>
        <Route path="*" element={<Catalog />} />
        <Route path="/1" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
