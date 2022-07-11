export interface User {
  username: string;
  id: string;
}

export interface UserState {
  userInfo: User;
  logged: boolean;
}
