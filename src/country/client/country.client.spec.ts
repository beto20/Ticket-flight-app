import { Test, TestingModule } from '@nestjs/testing';
import { CountryClient } from './country.client';

describe('CountryClient_test', () => {
  let countryClient: CountryClient;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryClient, 
    ],
    }).compile();

    countryClient = module.get<CountryClient>(CountryClient);
  });

  it('CountryClient should be defined', () => {
    expect(countryClient).toBeDefined();
  });

  describe('GetCountryParams_test', () => {
    it('Should get all countries', async() => {

      countryClient.getCountryParams();

    });
  });

});
