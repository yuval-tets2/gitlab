import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  content?: string | null;
  createdOn?: Date | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
