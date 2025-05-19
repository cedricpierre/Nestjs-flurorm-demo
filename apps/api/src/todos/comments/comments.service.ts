import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  // In-memory storage for demo purposes
  private comments: Map<number, Map<number, any>> = new Map();

  create(todoId: number, createCommentDto: CreateCommentDto) {
    if (!this.comments.has(todoId)) {
      this.comments.set(todoId, new Map());
    }
    const todoComments = this.comments.get(todoId);
    const commentId = todoComments.size + 1;
    const comment = {
      id: commentId,
      todoId,
      ...createCommentDto,
    };
    todoComments.set(commentId, comment);
    return comment;
  }

  findAllByTodo(todoId: number) {
    return [
      {
        id: 1,
        todoId,
        content: 'Comment 1',
        authorId: 1,
        author: {
          id: 1,
          name: 'John Doe',
        },
      },
      {
        id: 2,
        todoId,
        content: 'Comment 2',
        authorId: 2,
        author: {
          id: 2,
          name: 'Jane Doe',
        },
      },
    ];
  }

  findOneByTodo(todoId: number, id: number) {
    return {
      id,
      todoId,
      content: 'Comment ' + id,
    };
  }

  update(todoId: number, id: number, updateCommentDto: UpdateCommentDto) {
    const comment = this.findOneByTodo(todoId, id);
    const updatedComment = {
      ...comment,
      ...updateCommentDto,
    };
    this.comments.get(todoId).set(id, updatedComment);
    return updatedComment;
  }

  remove(todoId: number, id: number) {
    const todoComments = this.comments.get(todoId);
    if (!todoComments || !todoComments.has(id)) {
      throw new NotFoundException(`Comment #${id} not found for todo #${todoId}`);
    }
    todoComments.delete(id);
    return { deleted: true };
  }
}
