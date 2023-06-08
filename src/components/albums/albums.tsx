import { useEffect, useState } from "react";
import Photos from "../photos/photos";
import { ALBUMS_URL, albums } from "../../data/data";
import LevelBlocks from "../levels-block/level-block";
import "./albums.scss";
import Loader from "../loader/loader";

interface AlbumsProps {
  userId: number;
}

const Albums = ({ userId }: AlbumsProps) => {
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const [albumsFromApi, setAlbumsFromApi] = useState([]);

  useEffect(() => {
    fetch(`${ALBUMS_URL}${userId}`)
      .then((data) => data.json())
      .then((json) => {
        setAlbumsFromApi(json);
        setLoading(false);
      });
  }, [userId]);

  const albums = albumsFromApi.map((el: albums) => (
    <LevelBlocks onClick={handleClick} title={el.title}>
      <Photos />
    </LevelBlocks>
  ));

  return (
    <div className="albums">
      <Loader loadingStatus={loading} />
      {albums}
    </div>
  );
};

export default Albums;
