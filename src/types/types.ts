export interface User {
  username: string;
  id: string;
}

export interface UserState {
  userInfo: User;
  logged: boolean;
}

export interface UserRegister {
  username: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface DecodeToken {
  username: string;
  id: string;
}
export interface ResponseApi {
  data: {
    token: string;
  };
}
export interface Location {
  type: string;
  properties: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
}
export interface LocationState {
  features: Location[];
}

export interface LocationForm {
  name: string;
  description: string;
  image: string[] | File[];
}
