import { HasMany, Model, type Relation } from "@fluentity/core";
import { Todo as TodoEntity } from '@api/todos/entities/todo.entity';
import { Comment } from "./Comment";

export class Todo extends Model<TodoEntity> {
  static resource = 'todos';

  @HasMany(() => Comment)
  comments!: Relation<Comment>;
}