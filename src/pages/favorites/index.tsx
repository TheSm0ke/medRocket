import Photo from "../../components/photo/photo";
import { useEffect, useState } from "react";
import emptyImg from "../../data/empty.png";
import "./favorites.scss";

const Favorites = () => {
  const [allFavorites, setAllFavorites] = useState<JSX.Element>(<></>);

  useEffect(() => {
    if (localStorage.getItem("listFavorites") !== "") {
      const allPhotoId = localStorage.getItem("listFavorites")?.split(";");
      console.log(allPhotoId);
      const jsxPhoto = allPhotoId?.map((el) => {
        if (el.length > 0) {
          const jsonEl = JSON.parse(el);
          return (
            <div className="favorites-photo">
              <Photo src={jsonEl.src} starClicked alt={jsonEl.alt} idPhoto={jsonEl.id} />
              <p className="favorites-photo-alt">{jsonEl.alt}</p>
            </div>
          );
        }
        return <></>;
      });
      console.log(jsxPhoto);
      setAllFavorites(<>{jsxPhoto}</>);
    }
  }, []);

  if (
    localStorage.getItem("listFavorites")?.trim().length === 0 &&
    allFavorites === <></>
  )
    return (
      <div className="favorites">
        <div className="favorites-empty">
          <img src={emptyImg} alt="Пустой список" />
          <h2>Список избранного пуст</h2>
          <p style={{ margin: "0px" }}>Добавляйте изображения, нажимая на звездочки</p>
        </div>
      </div>
    );

  return <div className="favorites">{allFavorites}</div>;
};

export default Favorites;
