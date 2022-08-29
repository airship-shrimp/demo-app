import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Book = {
  id: string;
  name: JsonValue;
  xxx: string | null;
  xxxxx?: User | null;
};
