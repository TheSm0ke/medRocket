import { useEffect, useState } from "react";
import { USER_URL } from "../../data/data";
import FirstLevel from "../../components/first-level";

interface dataUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Catalog = () => {
  const [allUsers, setAllusers] = useState([]);

  useEffect(() => {
    fetch(USER_URL)
      .then((data) => data.json())
      .then((data) => {
        setAllusers(
          data.map((el: dataUser, index: number) => {
            return <FirstLevel index={index} title={el.name} />;
          })
        );
      });
  }, []);

  return <div className="app">{allUsers}</div>;
};

export default Catalog;
