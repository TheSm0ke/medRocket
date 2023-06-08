// import { useEffect } from "react";
import Header from "../components/header/header";
import Routing from "../routing/routing";
import "./index.scss";

export const App = () => {
  // useEffect(() => {
  //   localStorage.setItem("listFavorites", "");
  // }, []);

  return (
    <div className="body">
      <Header />
      <Routing />
    </div>
  );
};
