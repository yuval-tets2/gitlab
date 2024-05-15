import { SortOrder } from "../../util/SortOrder";

export type FollowerOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  followerId?: SortOrder;
  following?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
