import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PetWhereInput = {
  age?: StringFilter;
  gender?: BooleanNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
