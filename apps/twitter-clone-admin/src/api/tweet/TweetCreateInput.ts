import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  content?: string | null;
  createdOn?: Date | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
