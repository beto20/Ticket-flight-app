import { Controller, Get, ForbiddenException } from '@nestjs/common';
import { CountryService } from '../service/country.service';
import { stringify } from 'flatted';

@Controller('api/v1/countries')
export class CountryController {
    
    constructor(private readonly countryService: CountryService) {}

    @Get()
    getCountryParams() {
        return this.countryService.getCountryParams()
    }
    
}