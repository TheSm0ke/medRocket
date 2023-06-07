import { useEffect, useState } from "react";
import Loader from "../loader/loader";

const SecondLevel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <div>{loading && <Loader loadingStatus={loading} />}</div>;
};

export default SecondLevel;
