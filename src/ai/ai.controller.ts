import { Body, Controller, Param, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AiService } from './ai.service';
import { TasksService } from '../tasks/tasks.service';
import { SynthesizeTaskDto } from './dto/synthesize-task.dto';
import { AiSynthesisResponseDto } from './dto/ai-response.dto';
import { TaskResponseDto } from '../tasks/dto/task-response.dto';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('ai')
@Controller('ai')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class AiController {
  constructor(
    private readonly aiService: AiService,
    private readonly tasksService: TasksService,
  ) {}

  @Post('synthesize')
  @ApiOperation({
    summary: 'Synthesize raw text into structured task insights',
    description: 'Uses OpenAI API (with resilient heuristic fallback) to transform unstructured notes into structured tasks, priorities, tags, and action items.',
  })
  @ApiResponse({ status: 200, description: 'Successfully synthesized task', type: AiSynthesisResponseDto })
  async synthesize(@Body() dto: SynthesizeTaskDto): Promise<AiSynthesisResponseDto> {
    return this.aiService.synthesize(dto);
  }

  @Post('enrich/:taskId')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Enrich an existing task in PostgreSQL using AI',
    description: 'Reads user task, generates an executive summary and tags, and persists the enrichment back to the database.',
  })
  @ApiParam({ name: 'taskId', description: 'Task UUID identifier' })
  @ApiResponse({ status: 200, description: 'Task enriched and saved to PostgreSQL', type: TaskResponseDto })
  async enrichTask(@Req() req: any, @Param('taskId') taskId: string): Promise<TaskResponseDto> {
    const task = await this.tasksService.findOne(req.user.userId, taskId);
    const synthesis = await this.aiService.synthesize({
      rawInput: `${task.title}. ${task.description || ''}`,
    });

    const updated = await this.tasksService.update(req.user.userId, taskId, {
      ai_summary: synthesis.aiSummary,
      tags: Array.from(new Set([...(task.tags || []), ...synthesis.suggestedTags])),
    });

    return updated;
  }
}
