import { Follower as TFollower } from "../api/follower/Follower";

export const FOLLOWER_TITLE_FIELD = "comment";

export const FollowerTitle = (record: TFollower): string => {
  return record.comment?.toString() || String(record.id);
};
