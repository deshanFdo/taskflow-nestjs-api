import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { TaskPriority, TaskStatus } from './create-task.dto';

export class UpdateTaskDto {
  @ApiPropertyOptional({
    description: 'Updated title of the task',
    example: 'Refactored OpenAI GPT-4o Action Extraction',
    maxLength: 255,
  })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  title?: string;

  @ApiPropertyOptional({
    description: 'Updated description of the task requirements',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    enum: TaskStatus,
    description: 'Updated status of the task',
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @ApiPropertyOptional({
    enum: TaskPriority,
    description: 'Updated priority urgency',
  })
  @IsEnum(TaskPriority)
  @IsOptional()
  priority?: TaskPriority;

  @ApiPropertyOptional({
    description: 'AI-generated executive summary or enrichment notes',
  })
  @IsString()
  @IsOptional()
  ai_summary?: string;

  @ApiPropertyOptional({
    type: [String],
    description: 'Updated list of tags',
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];
}

