import { Injectable, Response } from '@nestjs/common';
import { CountryDto } from '../model/dto/country.dto';
import { map } from 'rxjs';
import { CacheService } from 'src/cache/service/cache.service';
import { CountryClient } from '../client/country.client';
import { CountryWebResponseDto } from '../model/dto/country.web.response.dto';

@Injectable()
export class CountryService {

    constructor(
        private readonly countryClient: CountryClient,
        private readonly cacheService: CacheService,
    ) { }

    async getCountryParams() {
        let countryParamsResponse = this.cacheService.getCountryParams();

        if ((await countryParamsResponse).length !== 0) return countryParamsResponse;

        const countryParams = await this.countryClient.getCountryParams();

        const countriesWebResponse = countryParams
            .pipe(
                map((response) => {
                    let listOfCountries: CountryWebResponseDto[] = [];
                    const filterResponse = this.filterByRegion(response);

                    filterResponse.forEach(c => {
                        let countryInstance = new CountryWebResponseDto(
                            c.official,
                            c.capital[0],
                        )
                        listOfCountries.push(countryInstance);
                    });

                    this.cacheService.persistCountryParams(filterResponse);
                    return listOfCountries;
                })
            );
        return countriesWebResponse;
    }

    private filterByRegion(countries: CountryDto[]) {
        let filteredListOfCountries: CountryDto[] = [];

        countries.forEach(c => {
            if (c.region === "Americas" && c.subregion === "South America") {
                let countryInstance = new CountryDto(
                    c.official,
                    c.capital,
                    c.region,
                    c.subregion
                )
                filteredListOfCountries.push(countryInstance);
            }
        })
        console.log(filteredListOfCountries)
        return filteredListOfCountries;
    }

}