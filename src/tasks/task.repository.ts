import { Column, EntityRepository, PrimaryGeneratedColumn, Repository } from "typeorm";
import { Task } from "./task.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
   

}