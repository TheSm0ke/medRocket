import { useEffect, useState } from "react";
import starDeactive from "../../data/star_empty.png";
import starActive from "../../data/star_active.png";
import "./photo.scss";
import Modal from "../modal/modal";

interface PhotoProps {
  src: string;
  bigSrc: string;
  alt: string;
  starClicked?: boolean;
  idPhoto: number;
}

const Photo = ({ src, alt, starClicked, idPhoto, bigSrc }: PhotoProps) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [starClick, setStarClick] = useState(false);
  const [starSrc, setStarSrc] = useState(starDeactive);
  const [positionXY, setPositionXY] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOnStar = (sendPhoto: any) => {
    setStarClick(!starClick);
    if (starClick === false) {
      localStorage.getItem("listFavorites");
      localStorage.setItem(
        "listFavorites",
        String(
          localStorage
            .getItem("listFavorites")
            ?.trim()
            .concat(`${JSON.stringify(sendPhoto)};`)
        )
      );
    } else {
      localStorage.setItem(
        "listFavorites",
        String(
          localStorage
            .getItem("listFavorites")
            ?.replace(`${JSON.stringify(sendPhoto)};`, "")
        ).trim()
      );
    }
  };

  useEffect(() => {
    if (
      localStorage
        .getItem("listFavorites")
        ?.includes(JSON.stringify({ id: idPhoto, src, alt, bigSrc }))
    )
      setStarClick(true);
    if (starClicked) setStarClick(true);
  }, [alt, bigSrc, idPhoto, src, starClicked]);

  useEffect(() => {
    if (starClick) {
      setStarSrc(starActive);
    } else {
      setStarSrc(starDeactive);
    }
  }, [starClick]);

  const handleHover = (mouseMove: any) => {
    setShowToolTip(true);
    setPositionXY({
      left: `${mouseMove.pageX + 20}px`,
      top: `${mouseMove.pageY + 20}px`,
    });
  };

  return (
    <div className="photo">
      {modalOpen && <Modal onClick={() => setModalOpen(false)} src={bigSrc} />}
      <img
        onMouseMove={handleHover}
        onMouseLeave={() => setShowToolTip(false)}
        onClick={() => setModalOpen(true)}
        src={src}
        alt={alt}
      />
      <img
        onClick={() => handleClickOnStar({ id: idPhoto, src, alt, bigSrc })}
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
