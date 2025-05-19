import { BelongsTo, Model, type Relation } from "fluorm";
import { Comment as CommentEntity } from '@api/todos/comments/entities/comment.entity';
import { Todo } from "./Todo";


export class Comment extends Model<CommentEntity> {
  static resource = 'comments';

  @BelongsTo(() => Todo)
  todo!: Relation<Todo>;
}