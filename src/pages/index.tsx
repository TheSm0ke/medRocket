import Header from "../components/header/header";
import Routing from "../routing/routing";
import "./index.scss";

export const App = () => {
  return (
    <div className="body">
      <Header />
      <Routing />
    </div>
  );
};
