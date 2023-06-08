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
  const allUsers = data.map((user: dataUser) => {
    return (
      <LevelBlocks title={user.name} key={user.id}>
        <Albums userId={user.id} />
      </LevelBlocks>
    );
  });

  return (
    <>
      <div className="all-catalog">
        <Loader loadingStatus={isLoad} />
        {allUsers}
      </div>
    </>
  );
};

export default Catalogs;
