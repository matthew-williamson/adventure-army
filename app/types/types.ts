enum Role {
  Host = "Host",
  Adventurer = "Adventurer",
}

export interface User {
  id: number;
  createdDate: Date;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  avatarUrl: string;
  aboutMe: string;
  roles: Role[];
}

export interface Post {
  id: number;
  createdDate: Date;
  content: string;
  user: Partial<User>;
}

// The friends DB/type would probably be shaped something like this:
interface Friends {
  id: number;
  user1: User;
  user2: User;
}
