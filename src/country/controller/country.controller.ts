import { Controller, Get } from '@nestjs/common';
import { CountryService } from '../service/country.service';
import { SkipAuth } from 'src/auth/util/auth.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Countries')
@Controller('api/v1/countries')
export class CountryController {
    
    constructor(private readonly countryService: CountryService) {}

    @Get()
    @SkipAuth()
    getCountryParams() {
        return this.countryService.getCountryParams()
    }
}