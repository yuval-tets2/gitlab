import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerUpdateManyWithoutFollowersInput } from "./FollowerUpdateManyWithoutFollowersInput";

export type FollowerUpdateInput = {
  comment?: string | null;
  follower?: FollowerWhereUniqueInput | null;
  followers?: FollowerUpdateManyWithoutFollowersInput;
  following?: string | null;
};
