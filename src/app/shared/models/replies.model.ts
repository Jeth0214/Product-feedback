import { IUser } from "./user.model";

export interface IReply {
  content: string;
  replyingTo: string;
  user: IUser;
}