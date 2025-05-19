import { BelongsTo, Model } from "fluorm";
import { Comment as CommentEntity } from '@api/todos/comments/entities/comment.entity';
import { Todo } from "./Todo";


export class Comment extends Model<CommentEntity> {
  static resource = 'comments';

  @BelongsTo(() => Todo)
  todo!: Todo;
}