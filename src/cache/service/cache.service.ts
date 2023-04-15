import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CountryDto } from 'src/country/model/dto/country.dto';
import { CountryWebResponseDto } from 'src/country/model/dto/country.web.response.dto';

@Injectable()
export class CacheService {

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async persistCountryParams(countries: CountryDto[]) {
    countries.forEach(c => {
      if(c.region === "Americas" && c.subregion === "South America") {
        this.cacheManager.set(c.official, `${c.official}||${c.capital}`);
      }
    })
  }

  async getAllKeys(): Promise<any> {
    return await this.cacheManager.store.keys('*');
  }

  async getValue(key: string): Promise<String> {
    return await this.cacheManager.get(key);
  }

  async getCountryParams(): Promise<CountryWebResponseDto[]> {
    let listOfCountries: CountryWebResponseDto[] = []; 
    let redisKeys: string[] = []

    redisKeys = await this.getAllKeys();

    if(redisKeys.length === 0) return listOfCountries;

    for (const key of redisKeys) {
      let countryWebResponseDto: CountryWebResponseDto = new CountryWebResponseDto("", "")

      const officialValue = await this.getValue(key)
      let arrayValueFromRedis = officialValue.split("||")

      countryWebResponseDto.name = arrayValueFromRedis[0]
      countryWebResponseDto.capital = arrayValueFromRedis[1]

      listOfCountries.push(countryWebResponseDto)
    }
    return listOfCountries;
  }

}