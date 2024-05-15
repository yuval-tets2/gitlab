import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  createdOn?: DateTimeNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
};
