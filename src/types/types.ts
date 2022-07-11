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
