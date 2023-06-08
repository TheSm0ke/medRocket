import { dataUser } from "../../data/data";
import Albums from "../albums/albums";
import LevelBlocks from "../levels-block/level-block";
import Loader from "../loader/loader";
import "./catalogs.scss";

interface AllCatalogProps {
  data: dataUser[];
  isLoad: boolean;
}
const Catalogs = ({ data, isLoad }: AllCatalogProps) => {
  const allUsers = data.map((el: dataUser) => {
    return (
      <LevelBlocks title={el.name} key={el.id}>
        <Albums userId={el.id} />
      </LevelBlocks>
    );
  });

  return (
    <>
      <Loader loadingStatus={isLoad} />
      <div className="all-catalog">{allUsers}</div>
    </>
  );
};

export default Catalogs;
