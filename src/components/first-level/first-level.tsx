import { BluePlus } from "../../data/svg";

interface FirstLeveProps {
  index: number;
  title: string;
}

const FirstLevel = ({ index, title }: FirstLeveProps) => {
  return (
    <div key={index}>
      {BluePlus} <p>{title}</p>
    </div>
  );
};

export default FirstLevel;
