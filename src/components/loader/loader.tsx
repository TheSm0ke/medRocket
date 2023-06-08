import loaderSrc from "../../data/loader.gif";
import "./loader.scss";

interface LoaderProps {
  loadingStatus: boolean;
  children?: JSX.Element;
}

const Loader = ({ loadingStatus, children }: LoaderProps) => {
  return (
    <>
      <div className="loader">
        {loadingStatus && <img src={loaderSrc} alt="loader" />}
      </div>
      {children}
    </>
  );
};

export default Loader;
