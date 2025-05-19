import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { CommentsModule } from './comments/comments.module';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [CommentsModule],
})
export class TodosModule {}
