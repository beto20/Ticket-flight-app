import { Module } from "@nestjs/common";
import { CacheService } from './service/cache.service';

import { redisStore } from 'cache-manager-redis-yet';
import { CacheModule } from "@nestjs/cache-manager";

@Module({
  controllers: [],
  providers: [
    CacheService,
  ],
  imports: [
    CacheModule.registerAsync<any>({
      useFactory: async () => ({
        store: await redisStore({ 
          ttl: 0,
          isCacheable: () => true
        }),
        host: 'localhost',
        port: 6379,
        isGlobal: true
      }),
    }),
  ],
  exports: [CacheService]
})
export class RedisModule {}