import { Injectable, Response } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CountryClientResponseDto, Name } from '../model/dto/country.client.response.dto';
import { AxiosResponse } from 'axios';
import { CountryDto } from '../model/dto/country.dto';
import { map } from 'rxjs';

@Injectable()
export class CountryService {

    constructor(private readonly httpService: HttpService) {}

    async getCountryParams() {

        return this.httpService.get<CountryClientResponseDto>('https://restcountries.com/v3.1/all')
        .pipe(
            map((res: AxiosResponse) => {
                let listOfCountries: CountryDto[] = [] 
                res.data.forEach(c => {
                    let countryInstance = new CountryDto(
                        c.name.official, 
                        c.capital, 
                        c.region, 
                        c.subregion
                    )
                    listOfCountries.push(countryInstance)
                });
                return listOfCountries
            })
        )
    }
}