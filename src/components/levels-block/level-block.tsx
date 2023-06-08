import { BlueMinus, BluePlus } from "../../data/svg";
import { useState } from "react";
import "./level-block.scss";

interface LevelBlocksProps {
  title: string;
  children: JSX.Element;
  onClick?: () => void;
}

const LevelBlocks = ({ children, title, onClick }: LevelBlocksProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    onClick;
  };

  return (
    <div className="level">
      <div className="level-header" onClick={handleClick}>
        <div className="level-status">
          {!clicked && BluePlus} {clicked && BlueMinus}
        </div>
        <div className="level-titile">{title}</div>
      </div>
      {clicked && children}
    </div>
  );
};

export default LevelBlocks;
