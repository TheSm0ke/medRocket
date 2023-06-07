import { dataUser } from "../../data/data";
import FirstLevel from "../first-level/first-level";

interface AllCatalogProps {
  data: dataUser[];
}

export const AllCatalog = ({ data }: AllCatalogProps) => {
  const firstLevels = data.map((el: dataUser, index: number) => {
    return <FirstLevel index={index} title={el.name} />;
  });

  return <div>{firstLevels}</div>;
};
