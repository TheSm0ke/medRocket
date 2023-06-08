import error from "../../data/error.png";

const ErrorPage = () => {
  return (
    <>
      <img src={error} alt="Ошибка" />
      <p>Сервер не отвечает</p>
      <p>Уже работаем над этим</p>
    </>
  );
};

export default ErrorPage;
