import error from "../../data/error.png";
import "./error.scss";

const ErrorPage = () => {
  return (
    <div className="error">
      <img src={error} alt="Ошибка" />
      <p style={{ margin: "0px" }}>
        <h2>Сервер не отвечает</h2>
        Уже работаем над этим
      </p>
    </div>
  );
};

export default ErrorPage;
