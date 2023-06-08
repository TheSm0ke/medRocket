import { useEffect, useState } from "react";
import { PHOTO_ALBUM_URL, photo } from "../../data/data";
import Photo from "../photo/photo";
import "./photos.scss";
import ErrorPage from "../../pages/error/error";

interface PhotosProps {
  albumId: number;
}

const Photos = ({ albumId }: PhotosProps) => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${PHOTO_ALBUM_URL}${albumId}`)
      .then((data) => data.json())
      .then((json) => {
        setPhotos(
          json.map((el: photo) => {
            return (
              <Photo key={el.id} idPhoto={el.id} src={el.thumbnailUrl} alt={el.title} />
            );
          })
        );
      })
      .catch((ex) => {
        console.log(ex);
        setError(true);
      });
  }, [albumId]);
  return (
    <div className="photos">
      {error && <ErrorPage />}
      {photos}
    </div>
  );
};

export default Photos;
