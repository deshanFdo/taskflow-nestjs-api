import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly jwtSecret = process.env.JWT_SECRET || 'unibench_super_secure_jwt_secret_key_2026_xyz';

  constructor(private readonly db: DatabaseService) {}

  async register(dto: RegisterDto): Promise<AuthResponseDto> {
    const existing = await this.db.getClient().from('users').select('id').eq('email', dto.email.toLowerCase()).single();

    if (existing.data) {
      throw new ConflictException('An account with this email address already exists');
    }

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(dto.password, salt);

    const { data: newUser, error } = await this.db
      .getClient()
      .from('users')
      .insert([
        {
          email: dto.email.toLowerCase(),
          password_hash: passwordHash,
          full_name: dto.fullName,
          role: 'RESEARCHER',
        },
      ])
      .select('id, email, full_name, role')
      .single();

    if (error || !newUser) {
      throw new Error(`Failed to create user account: ${error?.message}`);
    }

    const token = this.generateToken(newUser.id, newUser.email, newUser.role);

    return {
      accessToken: token,
      user: {
        id: newUser.id,
        email: newUser.email,
        fullName: newUser.full_name,
        role: newUser.role,
      },
    };
  }

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    const { data: user, error } = await this.db
      .getClient()
      .from('users')
      .select('id, email, password_hash, full_name, role')
      .eq('email', dto.email.toLowerCase())
      .single();

    if (error || !user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isValid = bcrypt.compareSync(dto.password, user.password_hash);
    if (!isValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.generateToken(user.id, user.email, user.role);

    return {
      accessToken: token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
      },
    };
  }

  verifyToken(token: string): { userId: string; email: string; role: string } {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as any;
      return { userId: decoded.sub, email: decoded.email, role: decoded.role };
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired authentication token');
    }
  }

  private generateToken(userId: string, email: string, role: string): string {
    return jwt.sign(
      {
        sub: userId,
        email,
        role,
      },
      this.jwtSecret,
      { expiresIn: '7d' },
    );
  }
}

