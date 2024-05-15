export type Follower = {
  comment: string | null;
  createdAt: Date;
  follower?: Follower | null;
  followers?: Array<Follower>;
  following: string | null;
  id: string;
  updatedAt: Date;
};
