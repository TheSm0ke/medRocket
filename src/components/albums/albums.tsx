import { useEffect, useState } from "react";
import Loader from "../loader/loader";
import { ALBUMS_URL, albums } from "../../data/data";

interface AlbumsProps {
  userId: number;
}

const Albums = ({ userId }: AlbumsProps) => {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState<albums[]>([]);

  useEffect(() => {
    fetch(`${ALBUMS_URL}${userId}`)
      .then((data) => data.json())
      .then((json) => {
        setAlbums(json);
        console.log(json);
        setLoading(false);
      });
  }, [userId]);

  const allAlbumsUser = albums.map((el) => {
    return el;
  });
  console.log(allAlbumsUser);

  return <div>{loading && <Loader loadingStatus={loading} />}</div>;
};

export default Albums;
