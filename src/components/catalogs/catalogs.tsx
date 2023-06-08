import { dataUser } from "../../data/data";
import Users from "../users/users";
import Loader from "../loader/loader";
import "./catalogs.scss";

interface AllCatalogProps {
  data: dataUser[];
}
const Catalogs = ({ data }: AllCatalogProps) => {
  const allUsers = data.map((el: dataUser) => {
    return <Users index={el.id} title={el.name} />;
  });

  return (
    <div className="all-catalog">
      <Loader loadingStatus />
      <>{allUsers}</>
    </div>
  );
};

export default Catalogs;
