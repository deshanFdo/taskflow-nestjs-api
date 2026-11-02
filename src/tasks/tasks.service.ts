import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskQueryDto } from './dto/task-query.dto';

@Injectable()
export class TasksService {
  constructor(private readonly db: DatabaseService) {}

  async findAll(userId: string, query: TaskQueryDto) {
    let q = this.db.getClient().from('tasks').select('*', { count: 'exact' }).eq('user_id', userId);

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
    const limit = query.limit ?? 50;

    q = q.order('created_at', { ascending: true }).range(offset, offset + limit - 1);

    const { data, count, error } = await q;

    if (error) {
      throw new InternalServerErrorException(`Failed to retrieve tasks: ${error.message}`);
    }

    return {
      total: count,
      limit,
      offset,
      data: data || [],
    };
  }

  async findOne(userId: string, id: string) {
    const { data, error } = await this.db
      .getClient()
      .from('tasks')
      .select('*')
      .eq('id', id)
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      throw new NotFoundException(`Milestone not found or unauthorized`);
    }

    return data;
  }

  async create(userId: string, dto: CreateTaskDto) {
    const payload = {
      user_id: userId,
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

  async update(userId: string, id: string, dto: UpdateTaskDto) {
    await this.findOne(userId, id);

    const updates: Record<string, any> = {
      ...dto,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await this.db
      .getClient()
      .from('tasks')
      .update(updates)
      .eq('id', id)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) {
      throw new InternalServerErrorException(`Failed to update milestone: ${error.message}`);
    }

    return data;
  }

  async remove(userId: string, id: string) {
    await this.findOne(userId, id);

    const { error } = await this.db.getClient().from('tasks').delete().eq('id', id).eq('user_id', userId);

    if (error) {
      throw new InternalServerErrorException(`Failed to delete milestone: ${error.message}`);
    }

    return { success: true, message: `Milestone ${id} successfully removed` };
  }

  async getMetrics(userId: string) {
    const { data, error } = await this.db.getClient().from('tasks').select('status, priority').eq('user_id', userId);

    if (error) {
      return { total: 0, completed: 0, inProgress: 0, criticalHigh: 0, completionRate: 0 };
    }

    const total = data.length;
    const completed = data.filter((t) => t.status === 'COMPLETED').length;
    const inProgress = data.filter((t) => t.status === 'IN_PROGRESS').length;
    const criticalHigh = data.filter((t) => t.priority === 'CRITICAL' || t.priority === 'HIGH').length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      inProgress,
      criticalHigh,
      completionRate,
    };
  }
}
