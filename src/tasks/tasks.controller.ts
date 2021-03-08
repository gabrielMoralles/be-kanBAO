import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'node:http';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(
        private tasksService: TasksService,
        private TaskRepository: TaskRepository
    ){}

    @Get()
    async getTasks(){
      let found = await this.TaskRepository.find()
      return found
    }

    @Get(':id')
    async getTaskbyId(@Param('id') id: number){
      let found = await this.tasksService.getTaskbyId(id);
      return found;
    }
    @Post()
    async createTask(@Body() body : CreateTaskDto): Promise<Task>{
      let task = this.tasksService.createTask(body);
      return task;
    }
}
