import { DataSource, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksRepository extends Repository<TaskEntity> {
  constructor(dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  // async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
  //   const { title, description } = createTaskDto;
  //
  //   const task = this.create({
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   });
  //
  //   await this.save(task);
  //   return task;
  // }
}