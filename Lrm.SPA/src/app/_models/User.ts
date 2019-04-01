import { Photo } from './Photo';

export interface User {
  id: number;
  username: string;
  email: string;
  firstname: string;
  middlename?: string;
  lastname: string;
  age: number;
  gender: string;
  created: string;
  lastActive: string;
  photoUrl?: string;
}
