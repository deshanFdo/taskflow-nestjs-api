import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskQueryDto } from './dto/task-query.dto';

@Injectable()
export class TasksService {
  constructor(private readonly db: DatabaseService) {}

  async findAll(query: TaskQueryDto) {
    let q = this.db.getClient().from('tasks').select('*', { count: 'exact' });

    if (query.status) {
      q = q.eq('status', query.status);
    }
    if (query.priority) {
      q = q.eq('priority', query.priority);
    }
    if (query.search) {
      q = q.or(`title.ilike.%${query.search}%,description.ilike.%${query.search}%`);
    }

    const offset = query.offset ?? 0;
    const limit = query.limit ?? 20;

    q = q.order('created_at', { ascending: false }).range(offset, offset + limit - 1);

    const { data, count, error } = await q;

    if (error) {
      throw new InternalServerErrorException(`Failed to retrieve tasks: ${error.message}`);
    }

    return {
      total: count,
      limit,
      offset,
      data,
    };
  }

  async findOne(id: string) {
    const { data, error } = await this.db.getClient().from('tasks').select('*').eq('id', id).single();

    if (error || !data) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return data;
  }

  async create(dto: CreateTaskDto) {
    const payload = {
      title: dto.title,
      description: dto.description || '',
      status: dto.status || 'PENDING',
      priority: dto.priority || 'MEDIUM',
      tags: dto.tags || [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await this.db.getClient().from('tasks').insert([payload]).select().single();

    if (error) {
      throw new InternalServerErrorException(`Database error: ${error.message}`);
    }

    return data;
  }

  async update(id: string, dto: UpdateTaskDto) {
    // Verify existence
    await this.findOne(id);

    const updates: Record<string, any> = {
      ...dto,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await this.db.getClient().from('tasks').update(updates).eq('id', id).select().single();

    if (error) {
      throw new InternalServerErrorException(`Failed to update task: ${error.message}`);
    }

    return data;
  }

  async remove(id: string) {
    await this.findOne(id);

    const { error } = await this.db.getClient().from('tasks').delete().eq('id', id);

    if (error) {
      throw new InternalServerErrorException(`Failed to delete task: ${error.message}`);
    }

    return { success: true, message: `Task ${id} successfully deleted` };
  }
}
