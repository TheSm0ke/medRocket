export const USER_URL = "https://json.medrocket.ru/users/";
export const ALBUMS_URL = "https://json.medrocket.ru/albums?userId=";
export const PHOTO_ALBUM_URL = "https://json.medrocket.ru/photos?albumId=";

export interface dataUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface albums {
  id: number;
  title: string;
  userId: number;
}

export interface photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const closeCross = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1.00049 1L25 24.9995" stroke="white" strokeWidth="2" />
    <path d="M24.9995 1L1 24.9995" stroke="white" strokeWidth="2" />
  </svg>
);
