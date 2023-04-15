import { HttpService } from '@nestjs/axios';
import { CountryClientResponseDto } from '../model/dto/country.client.response.dto';
import { CountryDto } from '../model/dto/country.dto';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountryClient {

    private readonly DATA_URL = 'https://restcountries.com/v3.1/all';

    constructor(
        private readonly httpService: HttpService,
    ) { }

    async getCountryParams() {
        let response = this.httpService.get<CountryClientResponseDto>(this.DATA_URL)
            .pipe(
                map((axiosResponse: AxiosResponse) => {
                    let listOfCountries: CountryDto[] = [];
                    axiosResponse.data.forEach(c => {
                        let countryInstance = new CountryDto(
                            c.name.official,
                            c.capital,
                            c.region,
                            c.subregion
                        )
                        listOfCountries.push(countryInstance);
                    });
                    return listOfCountries;
                })
            )

        return response;
    }

}