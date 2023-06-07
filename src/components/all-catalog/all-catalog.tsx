import { dataUser } from "../../data/data";
import FirstLevel from "../first-level/first-level";
import Loader from "../loader/loader";
import "./all-catalog.scss";

interface AllCatalogProps {
  data: dataUser[];
}

export const AllCatalog = ({ data }: AllCatalogProps) => {
  const firstLevels = data.map((el: dataUser) => {
    return <FirstLevel index={el.id} title={el.name} />;
  });

  return (
    <div className="all-catalog">
      <Loader loadingStatus /> {firstLevels}
    </div>
  );
};
