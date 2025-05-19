import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('todos/:todoId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Post()
  create(
    @Param('todoId') todoId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create(+todoId, createCommentDto);
  }

  @Get()
  findAll(@Param('todoId') todoId: string) {
    return this.commentsService.findAllByTodo(+todoId);
  }

  @Get(':id')
  findOne(@Param('todoId') todoId: string, @Param('id') id: string) {
    return this.commentsService.findOneByTodo(+todoId, +id);
  }

  @Patch(':id')
  update(
    @Param('todoId') todoId: string,
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.update(+todoId, +id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('todoId') todoId: string, @Param('id') id: string) {
    return this.commentsService.remove(+todoId, +id);
  }
}
