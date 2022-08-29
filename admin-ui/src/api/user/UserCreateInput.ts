import { BookCreateNestedManyWithoutUsersInput } from "./BookCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  books?: BookCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
