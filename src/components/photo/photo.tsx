import { useState } from "react";
import "./photo.scss";

interface PhotoProps {
  src: string;
  alt: string;
}

const Photo = ({ src, alt }: PhotoProps) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [positionXY, setPositionXY] = useState({});

  const handleHover = (el: any) => {
    setShowToolTip(true);
    setPositionXY({
      left: `${el.pageX + 20}px`,
      top: `${el.pageY + 20}px`,
    });
  };

  return (
    <div
      className="photo"
      onMouseMove={handleHover}
      onMouseLeave={() => setShowToolTip(false)}>
      <img src={src} alt={alt} />
      {showToolTip && (
        <div className="photo-tooltip" style={positionXY}>
          {alt}
        </div>
      )}
    </div>
  );
};

export default Photo;
