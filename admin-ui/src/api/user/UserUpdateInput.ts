import { BookUpdateManyWithoutUsersInput } from "./BookUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  books?: BookUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
