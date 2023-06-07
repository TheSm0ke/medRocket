export const USER_URL = "https://json.medrocket.ru/users/";
export const ALBUMS_URL = "https://json.medrocket.ru/albums?userId=3";
export const PHOTO_ALBUM_URL = "https://json.medrocket.ru/photos?albumId=2";

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
