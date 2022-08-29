import { Book } from "../book/Book";

export type User = {
  books?: Array<Book>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
