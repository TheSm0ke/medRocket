import { useEffect, useState } from "react";
import { dataUser, USER_URL } from "../../data/data";
import Catalogs from "../../components/catalogs/catalogs";
import ErrorPage from "../error/error";

const Catalog = () => {
  const [allUsers, setAllUsers] = useState<dataUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(USER_URL)
      .then((data) => data.json())
      .then((data) => {
        loading;
        setAllUsers(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.log(ex);
        setLoading(false);
        setError(true);
      });
  }, [loading]);

  return (
    <>
      {error && <ErrorPage />}
      <Catalogs data={allUsers} isLoad={loading} />
    </>
  );
};

export default Catalog;
