import { Module } from '@nestjs/common';
import { CountryController } from './controller/country.controller';
import { CountryService } from './service/country.service';
import { HttpModule } from '@nestjs/axios';
import { RedisModule } from 'src/cache/redis.module';

@Module({
    imports: [HttpModule, RedisModule],
    controllers: [CountryController],
    providers: [CountryService]
})
export class CountryModule {}
