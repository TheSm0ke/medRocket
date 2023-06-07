import { useState } from "react";
import loaderSrc from "../../data/loader.gif";

const SecondLevel = () => {
  const [loading, setLoading] = useState(true);
  const loader = (
    <>
      <img src={loaderSrc} alt="loader" />
      <div onClick={() => setLoading(false)}>cancel</div>
    </>
  );

  return <div>{loading && loader}</div>;
};

export default SecondLevel;
