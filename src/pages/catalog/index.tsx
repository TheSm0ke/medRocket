import { useEffect, useState } from "react";
import { dataUser, USER_URL } from "../../data/data";
import { AllCatalog } from "../../components/all-catalog/all-catalog";

const Catalog = () => {
  const [allUsers, setAllUsers] = useState<dataUser[]>([]);

  useEffect(() => {
    fetch(USER_URL)
      .then((data) => data.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  return <AllCatalog data={allUsers} />;
};

export default Catalog;
