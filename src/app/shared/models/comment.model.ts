import { IReply } from "./replies.model";
import { IUser } from "./user.model";

export interface IComment {
  id: number,
  content: string,
  user: IUser,
  replies?: IReply[]
}