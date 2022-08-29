import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookWhereInput = {
  id?: StringFilter;
  xxx?: StringNullableFilter;
  xxxxx?: UserWhereUniqueInput;
};
