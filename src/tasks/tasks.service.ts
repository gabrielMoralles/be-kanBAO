import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { stat } from 'node:fs';
import { throwError } from 'rxjs';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
    constructor(
        private taskRepository: TaskRepository
    ){

    }
    getAllTasks(){
        return `oie`
    }
    async getTaskbyId(id: number): Promise<Task>{
        const found = await this.taskRepository.findOne(id);
        if(found){
            return found 
        }else{
            throw new NotFoundException(found, `Task com a id ${id} não existe.`)
        }   
        return 
    }
    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        let { name,date,status} = createTaskDto;
        let task = new Task();

        task.name = name;
        task.date = date;
        task.status = status;

        let save = task.save();
        if(save){
            return task 
        }else{
            throw BadRequestException
        }
    }
}
