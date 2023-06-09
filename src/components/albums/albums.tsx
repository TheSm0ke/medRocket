import { useEffect, useState } from "react";
import Photos from "../photos/photos";
import { ALBUMS_URL, albums } from "../../data/data";
import LevelBlocks from "../levels-block/level-block";
import "./albums.scss";
import Loader from "../loader/loader";
import ErrorPage from "../../pages/error/error";

interface AlbumsProps {
  userId: number;
}

const Albums = ({ userId }: AlbumsProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
      })
      .catch((ex) => {
        console.log(ex);
        setError(true);
        setLoading(false);
      });
  }, [userId]);

  const albums = albumsFromApi.map((album: albums) => (
    <LevelBlocks onClick={handleClick} title={album.title} key={album.id}>
      <Photos albumId={album.id} />
    </LevelBlocks>
  ));

  return (
    <>
      <Loader loadingStatus={loading} />
      <div className="albums">
        {error && <ErrorPage />}
        {albums}
      </div>
    </>
  );
};

export default Albums;
