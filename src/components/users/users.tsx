import { useState } from "react";
import { BlueMinus, BluePlus } from "../../data/svg";
import Albums from "../albums/albums";
import "./users.scss";

interface UsersProps {
  index: number;
  title: string;
}

const Users = ({ index, title }: UsersProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="first-level" key={index} onClick={handleClick}>
      {!clicked && BluePlus} {clicked && BlueMinus} {clicked && <Albums userId={index} />}
      <p>{title}</p>
    </div>
  );
};

export default Users;
