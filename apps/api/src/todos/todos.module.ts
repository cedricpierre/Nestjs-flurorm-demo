import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { CommentsModule } from './comments/comments.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [CommentsModule, PrismaModule],
})
export class TodosModule {}
