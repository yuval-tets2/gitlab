import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  createdOn?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
