import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto, UserProfileDto } from './dto/auth-response.dto';
import { AuthGuard } from './auth.guard';

@ApiTags('auth')
@Controller('auth')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Register a new researcher account',
    description: 'Creates a private account in Supabase PostgreSQL with bcrypt password encryption.',
  })
  @ApiResponse({ status: 201, description: 'Account created successfully', type: AuthResponseDto })
  async register(@Body() dto: RegisterDto): Promise<AuthResponseDto> {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Log in to account',
    description: 'Authenticates credentials and returns a secure JWT Bearer token.',
  })
  @ApiResponse({ status: 200, description: 'Login successful', type: AuthResponseDto })
  async login(@Body() dto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(dto);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get current user profile',
    description: 'Returns authenticated user details verified by JWT token.',
  })
  @ApiResponse({ status: 200, description: 'Profile retrieved', type: UserProfileDto })
  async getProfile(@Req() req: any): Promise<UserProfileDto> {
    return {
      id: req.user.userId,
      email: req.user.email,
      fullName: req.user.fullName || 'Researcher',
      role: req.user.role,
    };
  }
}

