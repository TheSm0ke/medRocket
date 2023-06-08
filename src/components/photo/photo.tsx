import { useEffect, useState } from "react";
import starDeactive from "../../data/star_empty.png";
import starActive from "../../data/star_active.png";
import "./photo.scss";

interface PhotoProps {
  src: string;
  alt: string;
  starClicked?: boolean;
  idPhoto: number;
}

const Photo = ({ src, alt, starClicked, idPhoto }: PhotoProps) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [starClick, setStarClick] = useState(false);
  const [starSrc, setStarSrc] = useState(starDeactive);
  const [positionXY, setPositionXY] = useState({});

  const handleClick = (sendPhoto: any) => {
    setStarClick(!starClick);
    if (starClick === false) {
      localStorage.setItem(
        "listFavorites",
        String(
          localStorage
            .getItem("listFavorites")
            ?.trim()
            .concat(`${JSON.stringify(sendPhoto)};`)
        )
      );
      console.log(localStorage.getItem("listFavorites"));
    } else {
      localStorage.setItem(
        "listFavorites",
        String(
          localStorage
            .getItem("listFavorites")
            ?.replace(`${JSON.stringify(sendPhoto)};`, "")
        ).trim()
      );
      console.log(localStorage.getItem("listFavorites"));
    }
  };

  useEffect(() => {
    if (starClicked) setStarClick(true);
  }, [starClicked]);

  useEffect(() => {
    if (starClick) {
      setStarSrc(starActive);
    } else {
      setStarSrc(starDeactive);
    }
  }, [starClick, starClicked]);

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
      <img
        onClick={() => handleClick({ id: idPhoto, src, alt })}
        className="photo-star"
        src={starSrc}
        alt="Звезда"
      />
      {showToolTip && (
        <div className="photo-tooltip" style={positionXY}>
          {alt}
        </div>
      )}
    </div>
  );
};

export default Photo;
