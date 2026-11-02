import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly db: DatabaseService) {}

  @Get()
  @ApiOperation({
    summary: 'Cloud health check & telemetry',
    description: 'Returns real-time status of the NestJS server, memory consumption, uptime, and PostgreSQL database latency.',
  })
  @ApiResponse({ status: 200, description: 'Service is healthy' })
  async check() {
    const dbHealth = await this.db.checkHealth();
    const memory = process.memoryUsage();

    return {
      status: 'UP',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV || 'production',
      database: {
        provider: 'Supabase PostgreSQL (AWS ap-southeast-1)',
        ...dbHealth,
      },
      system: {
        nodeVersion: process.version,
        rssMb: Math.round((memory.rss / 1024 / 1024) * 100) / 100,
        heapUsedMb: Math.round((memory.heapUsed / 1024 / 1024) * 100) / 100,
      },
    };
  }
}
