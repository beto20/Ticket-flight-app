import { Test, TestingModule } from '@nestjs/testing';
import { CountryService } from './country.service';

describe('CountryService_test', () => {
  let countryService: CountryService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryService,
      ],
    }).compile();

    countryService = module.get<CountryService>(CountryService);
  });

  it('CountryService should be defined', () => {
    expect(countryService).toBeDefined();
  });

  describe('GetCountryParams_test', () => {
    it('Should get all countries', async() => {

      countryService.getCountryParams();


    });
  });

});
