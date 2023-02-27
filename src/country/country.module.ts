import { Module } from '@nestjs/common';
import { CountryController } from './controller/country.controller';
import { CountryService } from './service/country.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [CountryController],
    providers: [CountryService]
})
export class CountryModule {}
