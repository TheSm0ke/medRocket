import { useState } from "react";
import { BlueMinus, BluePlus } from "../../data/svg";
import "./first-level.scss";

interface FirstLeveProps {
  index: number;
  title: string;
}

const FirstLevel = ({ index, title }: FirstLeveProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="first-level" key={index} onClick={handleClick}>
      {!clicked && BluePlus} {clicked && BlueMinus}
      <p>{title}</p>
    </div>
  );
};

export default FirstLevel;
