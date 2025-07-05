import { IComment } from "../models/comment.model";

export function countComment(comments: IComment[] | undefined): number {
  if (!comments) {
    return 0;
  }
  return comments.reduce((count, comment) => count + 1 + (comment.replies?.length || 0), 0);
}