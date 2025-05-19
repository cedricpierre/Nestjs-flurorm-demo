export class Comment {
  id: number;
  content: string;
  todoId: number;
  authorId: number;
  author: Author;
}

export class Author {
  id: number;
  name: string;
}
