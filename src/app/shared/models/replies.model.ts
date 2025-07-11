import { IUser } from "./user.model";

export interface IReply {
  content: string;
  replyingTo: string;
  user: IUser;
}

export interface IReplyInit {
  commentId: number,
  replyingTo: string,
  content: string
}