import { User } from "./user.model";

export interface Apero {
  id: string;
  datum: Date;
  image: string;

  teilnehmer?: User;

  themen?: Themen;
}

export interface Themen {
  name: string;
  description: string;

  links?: Links;
}

export interface Links {
  linkname: string;
  url: string;
}
