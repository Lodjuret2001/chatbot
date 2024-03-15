export interface UserInfo {
  name: string;
  mail: string;
  phoneNumber: string;
  contactMethod: string;
}

export default class User {
  constructor(public userInfo: UserInfo) {}
}
