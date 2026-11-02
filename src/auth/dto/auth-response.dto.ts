import { ApiProperty } from '@nestjs/swagger';

export class UserProfileDto {
  @ApiProperty({ example: '2f38f6cc-0dfd-408e-91fe-46e1269730af' })
  id: string;

  @ApiProperty({ example: 'deshanfernando67@gmail.com' })
  email: string;

  @ApiProperty({ example: 'Deshan Fernando' })
  fullName: string;

  @ApiProperty({ example: 'LEAD_RESEARCHER' })
  role: string;
}

export class AuthResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken: string;

  @ApiProperty({ type: UserProfileDto })
  user: UserProfileDto;
}
