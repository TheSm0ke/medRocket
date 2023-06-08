import { useEffect, useState } from "react";
import { dataUser, USER_URL } from "../../data/data";
import Catalogs from "../../components/catalogs/catalogs";

const Catalog = () => {
  const [allUsers, setAllUsers] = useState<dataUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(USER_URL)
      .then((data) => data.json())
      .then((data) => {
        loading;
        setAllUsers(data);
        setLoading(true);
      });
  }, [loading]);

  return <Catalogs data={allUsers} />;
};

export default Catalog;
