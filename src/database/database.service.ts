import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);
  private client: SupabaseClient;

  onModuleInit() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      this.logger.error('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from environment variables');
      throw new Error('Supabase configuration missing');
    }

    this.client = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    this.logger.log('Supabase PostgreSQL client successfully initialized');
  }

  getClient(): SupabaseClient {
    if (!this.client) {
      this.onModuleInit();
    }
    return this.client;
  }

  async checkHealth(): Promise<{ status: string; latencyMs: number }> {
    const start = Date.now();
    try {
      const { data, error } = await this.getClient().from('tasks').select('id').limit(1);
      if (error) throw error;
      return { status: 'healthy', latencyMs: Date.now() - start };
    } catch (err: any) {
      return { status: 'unhealthy', latencyMs: Date.now() - start };
    }
  }
}

