import { IComment } from "./comment.model";

export interface IFeedBack {
  id: number,
  title: string,
  category: string,
  upvotes: number,
  status: string,
  description: string,
  comments?: IComment[]
}