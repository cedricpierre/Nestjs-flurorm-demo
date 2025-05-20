import { BelongsTo, Cast, Model, type Relation } from "@fluentity/core";
import { Author as AuthorEntity } from '@api/todos/comments/entities/comment.entity';
import { Comment } from "./Comment";

export class Author extends Model<AuthorEntity> {
  static resource = 'authors';

  @BelongsTo(() => Comment)
  comment!: Relation<Comment>;

  @Cast(() => Author)
  author!: Author;
}