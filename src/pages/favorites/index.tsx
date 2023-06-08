import Photo from "../../components/photo/photo";
import emptyImg from "../../data/empty.png";
import "./favorites.scss";

interface FavoritesProps {
  listFavorites: any;
}

const Favorites = ({ listFavorites }: FavoritesProps) => {
  if (listFavorites?.length === 0 || listFavorites == null)
    return (
      <div className="favorites">
        <img src={emptyImg} alt="Пустой список" />
        <h2>Список избранного пуст</h2>
        <p style={{ margin: "0px" }}>Добавляйте изображения, нажимая на звездочки</p>
      </div>
    );

  const allFavorites = listFavorites.map((el: any) => {
    return (
      <div className="favorites-photo">
        <Photo starClicked src={el.url} alt={el.alt} />
        <p className="favorites-photo-alt">{el.alt}</p>
      </div>
    );
  });

  return <div className="favorites">{allFavorites}</div>;
};

export default Favorites;
