import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerCreateNestedManyWithoutFollowersInput } from "./FollowerCreateNestedManyWithoutFollowersInput";

export type FollowerCreateInput = {
  comment?: string | null;
  follower?: FollowerWhereUniqueInput | null;
  followers?: FollowerCreateNestedManyWithoutFollowersInput;
  following?: string | null;
};
