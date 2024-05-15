import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password?: string | null;
  profilePicture?: InputJsonValue;
  username?: string | null;
};
