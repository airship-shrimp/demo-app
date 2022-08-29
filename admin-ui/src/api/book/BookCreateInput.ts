import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookCreateInput = {
  name?: InputJsonValue;
  xxx?: string | null;
  xxxxx?: UserWhereUniqueInput | null;
};
