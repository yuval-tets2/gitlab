import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerListRelationFilter } from "./FollowerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowerWhereInput = {
  comment?: StringNullableFilter;
  follower?: FollowerWhereUniqueInput;
  followers?: FollowerListRelationFilter;
  following?: StringNullableFilter;
  id?: StringFilter;
};
