import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TaskResponseDto {
  @ApiProperty({ example: '4303d652-3ea9-4a33-afe4-3dfe01fda00f' })
  id: string;

  @ApiProperty({ example: 'Integrate OpenAI GPT-4o for Task Synthesis' })
  title: string;

  @ApiPropertyOptional({ example: 'Build automated pipeline to extract action items from meeting notes' })
  description?: string;

  @ApiProperty({ example: 'IN_PROGRESS' })
  status: string;

  @ApiProperty({ example: 'HIGH' })
  priority: string;

  @ApiPropertyOptional({ example: 'Automated task synthesis module using OpenAI LLM' })
  ai_summary?: string;

  @ApiProperty({ example: ['AI', 'NestJS', 'PostgreSQL'] })
  tags: string[];

  @ApiProperty({ example: '2026-11-02T17:34:20.193Z' })
  created_at: string;

  @ApiProperty({ example: '2026-11-02T17:34:20.193Z' })
  updated_at: string;
}

