import Photo from "../../components/photo/photo";
import { useEffect, useState } from "react";
import emptyImg from "../../data/empty.png";
import "./favorites.scss";
import Loader from "../../components/loader/loader";

const Favorites = () => {
  const [allFavorites, setAllFavorites] = useState<JSX.Element>(<></>);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Number(localStorage.getItem("listFavorites")?.length) > 0) {
      const allPhotoId = localStorage.getItem("listFavorites")?.split(";");
      const jsxPhoto = allPhotoId?.map((photoFromJson) => {
        if (photoFromJson.length > 0) {
          const photoObj = JSON.parse(photoFromJson);
          return (
            <div className="favorites-photo">
              <Photo
                src={photoObj.src}
                starClicked
                alt={photoObj.alt}
                idPhoto={photoObj.id}
                bigSrc={photoObj.bigSrc}
              />
              <p className="favorites-photo-alt">{photoObj.alt}</p>
            </div>
          );
        }
        return <></>;
      });
      setLoading(false);
      setAllFavorites(<>{jsxPhoto}</>);
    } else {
      setLoading(false);
    }
  }, []);

  if (
    Number(localStorage.getItem("listFavorites")?.length) === 0 ||
    allFavorites === <></> ||
    localStorage.getItem("listFavorites") === undefined ||
    localStorage.getItem("listFavorites") === null
  )
    return (
      <>
        <Loader loadingStatus={loading} />
        <div className="favorites">
          <div className="favorites-empty">
            <img src={emptyImg} alt="Пустой список" />
            <h2>Список избранного пуст</h2>
            <p style={{ margin: "0px" }}>Добавляйте изображения, нажимая на звездочки</p>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className="favorites">{allFavorites}</div>
    </>
  );
};

export default Favorites;
