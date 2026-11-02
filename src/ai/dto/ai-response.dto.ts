import { ApiProperty } from '@nestjs/swagger';

export class AiSynthesisResponseDto {
  @ApiProperty({ example: 'Implement Supabase Auth Session Expiry Guard' })
  suggestedTitle: string;

  @ApiProperty({ example: 'Configure NestJS middleware to validate JWT expiry and refresh tokens cleanly.' })
  structuredDescription: string;

  @ApiProperty({ example: 'HIGH', enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'] })
  suggestedPriority: string;

  @ApiProperty({ example: 'Urgent authentication hardening task focused on session persistence.' })
  aiSummary: string;

  @ApiProperty({ example: ['Verify token header in NestJS guard', 'Configure 1h refresh token rotation in Supabase'] })
  actionItems: string[];

  @ApiProperty({ example: ['Auth', 'Supabase', 'Security'] })
  suggestedTags: string[];

  @ApiProperty({ example: 'OpenAI GPT-4o-mini / Resilient NLP Engine' })
  engineUsed: string;
}

