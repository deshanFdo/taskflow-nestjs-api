import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'deshanfernando67@gmail.com', description: 'Registered email address' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Deshan@FYP2026!', description: 'Account password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
