import loaderSrc from "../../data/loader.gif";
import "./loader.scss";

interface LoaderProps {
  loadingStatus: boolean;
}

const Loader = ({ loadingStatus }: LoaderProps) => {
  return (
    <div className="loader">{loadingStatus && <img src={loaderSrc} alt="loader" />}</div>
  );
};

export default Loader;
