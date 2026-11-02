import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskQueryDto } from './dto/task-query.dto';
import { TaskResponseDto } from './dto/task-response.dto';

@ApiTags('tasks')
@Controller('tasks')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({
    summary: 'List all tasks',
    description: 'Retrieve a paginated list of tasks with optional filtering by status, priority, or search keyword.',
  })
  @ApiResponse({ status: 200, description: 'Paginated tasks returned successfully' })
  async findAll(@Query() query: TaskQueryDto) {
    return this.tasksService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by ID', description: 'Retrieve full details of a specific task by its UUID.' })
  @ApiParam({ name: 'id', description: 'Task UUID identifier', example: '4303d652-3ea9-4a33-afe4-3dfe01fda00f' })
  @ApiResponse({ status: 200, description: 'Task details found', type: TaskResponseDto })
  @ApiResponse({ status: 404, description: 'Task not found' })
  async findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task', description: 'Persist a new task in Supabase PostgreSQL database.' })
  @ApiResponse({ status: 201, description: 'Task successfully created', type: TaskResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input payload' })
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing task', description: 'Modify task attributes or attach AI-generated synthesis.' })
  @ApiParam({ name: 'id', description: 'Task UUID identifier' })
  @ApiResponse({ status: 200, description: 'Task updated successfully', type: TaskResponseDto })
  @ApiResponse({ status: 404, description: 'Task not found' })
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a task', description: 'Remove a task permanently from the PostgreSQL database.' })
  @ApiParam({ name: 'id', description: 'Task UUID identifier' })
  @ApiResponse({ status: 200, description: 'Task deleted successfully' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  async remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
