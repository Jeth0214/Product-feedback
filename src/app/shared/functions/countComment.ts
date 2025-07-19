import { IComment } from "../models/comment.model";

export function countComment(comments: IComment[] | undefined): number {

  return comments?.reduce((count, comment) => count + 1 + (comment.replies?.length || 0), 0) || 0;
}