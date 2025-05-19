import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll() {
    return [
      {
        id: 1,
        title: 'Todo 1',
        description: 'Description 1',
        completed: false,
      },
    ];
  }

  findOne(id: number) {
    return {
      id,
      title: 'Todo ' + id,
      description: 'Description ' + id,
      completed: false,
    };
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
