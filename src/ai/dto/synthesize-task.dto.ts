import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SynthesizeTaskDto {
  @ApiProperty({
    description: 'Raw meeting notes, prompt, or unorganized project requirements',
    example: 'Need to implement Supabase auth and link it with NestJS backend by Friday. Urgent fix needed for session expiry.',
  })
  @IsString()
  @IsNotEmpty()
  rawInput: string;

  @ApiPropertyOptional({
    description: 'Target AI model to use for synthesis',
    example: 'gpt-4o-mini',
    default: 'gpt-4o-mini',
  })
  @IsString()
  @IsOptional()
  model?: string;
}

