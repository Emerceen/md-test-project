export interface UserInterface {
  id: number;
  name: string;
  location: string;
  followers_url: string;
  url: string;
  login: string;
}

export class User {
  static fromData(data: UserInterface): User {
    if (data.location) {
      return new User(data.id, data.name, data.location.split(/,/)[0], data.followers_url, data.url, data.login);
    } else {
      return new User(data.id, data.name, undefined, data.followers_url, data.url, data.login);
    }
  }

  constructor(
    public id: number,
    public name: string,
    public location: string,
    public followers_url: string,
    public url: string,
    public login: string,
    public distanceToFollowingUser?: number
  ) { }
}
