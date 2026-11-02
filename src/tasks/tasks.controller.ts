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
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskQueryDto } from './dto/task-query.dto';
import { TaskResponseDto } from './dto/task-response.dto';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('tasks')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('tasks')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('metrics')
  @ApiOperation({ summary: 'Get user milestone statistics', description: 'Returns completion rate and priority distributions.' })
  async getMetrics(@Req() req: any) {
    return this.tasksService.getMetrics(req.user.userId);
  }

  @Get()
  @ApiOperation({
    summary: 'List user tasks',
    description: 'Retrieve paginated tasks strictly belonging to the authenticated user.',
  })
  @ApiResponse({ status: 200, description: 'Paginated user tasks returned successfully' })
  async findAll(@Req() req: any, @Query() query: TaskQueryDto) {
    return this.tasksService.findAll(req.user.userId, query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by ID', description: 'Retrieve task if owned by authenticated user.' })
  @ApiParam({ name: 'id', description: 'Task UUID identifier' })
  @ApiResponse({ status: 200, description: 'Task details found', type: TaskResponseDto })
  @ApiResponse({ status: 404, description: 'Task not found' })
  async findOne(@Req() req: any, @Param('id') id: string) {
    return this.tasksService.findOne(req.user.userId, id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task', description: 'Create task tied to authenticated user profile.' })
  @ApiResponse({ status: 201, description: 'Task successfully created', type: TaskResponseDto })
  async create(@Req() req: any, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(req.user.userId, createTaskDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task', description: 'Update task if owned by user.' })
  @ApiParam({ name: 'id', description: 'Task UUID identifier' })
  @ApiResponse({ status: 200, description: 'Task updated successfully', type: TaskResponseDto })
  async update(@Req() req: any, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(req.user.userId, id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a task', description: 'Delete task if owned by user.' })
  @ApiParam({ name: 'id', description: 'Task UUID identifier' })
  async remove(@Req() req: any, @Param('id') id: string) {
    return this.tasksService.remove(req.user.userId, id);
  }
}
