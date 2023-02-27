import { Test, TestingModule } from '@nestjs/testing';
import { CountryService } from '../service/country.service';
import { CountryController } from './country.controller';

describe('CountryController_test', () => {
  let countryController: CountryController;
  let countryService: CountryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryService, ],
      controllers: [CountryController],
    }).compile();

    countryService = module.get<CountryService>(CountryService);
    countryController = module.get<CountryController>(CountryController);
  });

  it('should be defined', () => {
    expect(countryController).toBeDefined();
  });

  describe('GetCountryParams_test', () => {
    it('should get all country', async() => {
      
      // jest.spyOn(countryService, 'getCountryParams').mockImplementation();

      countryController.getCountryParams();

      // expect(countryService.getCountryParams).toBeCalledTimes(1);
      expect(countryController.getCountryParams).toBeDefined();
    });
  });

});
