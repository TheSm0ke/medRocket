import { useEffect, useState } from "react";
import starDeactive from "../../data/star_empty.png";
import starActive from "../../data/star_active.png";
import "./photo.scss";

interface PhotoProps {
  src: string;
  alt: string;
}

const Photo = ({ src, alt }: PhotoProps) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [starClick, setStarClick] = useState(false);
  const [starSrc, setStarSrc] = useState(starDeactive);
  const [positionXY, setPositionXY] = useState({});

  const handleClick = () => {
    setStarClick(!starClick);
  };

  useEffect(() => {
    if (starClick) {
      setStarSrc(starActive);
    } else {
      setStarSrc(starDeactive);
    }
  }, [starClick]);

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
      <img onClick={handleClick} className="photo-star" src={starSrc} alt="Звезда" />
      {showToolTip && (
        <div className="photo-tooltip" style={positionXY}>
          {alt}
        </div>
      )}
    </div>
  );
};

export default Photo;
