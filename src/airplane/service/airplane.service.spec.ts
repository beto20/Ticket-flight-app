import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AirplaneService } from './airplane.service';
import { AirplaneEntity } from '../model/entity/airplane.entity';

describe('AirplaneService_test', () => {
  let airplaneService: AirplaneService;
  let airplaneRepository: Repository<AirplaneEntity>

  const FLIGHT_REPOSITORY_TOKEN = getRepositoryToken(AirplaneEntity)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirplaneService, {
        provide: FLIGHT_REPOSITORY_TOKEN,
        useValue: {
          save: jest.fn(),
          findBy: jest.fn(),
          delete: jest.fn(),

        }
      },
    ],
    }).compile();

    airplaneService = module.get<AirplaneService>(AirplaneService);
    airplaneRepository = module.get<Repository<AirplaneEntity>>(FLIGHT_REPOSITORY_TOKEN)
  });

  it('FlightService should be defined', () => {
    expect(airplaneService).toBeDefined();
  });

  it('FlightRepository should be defined', () => {
    expect(airplaneRepository).toBeDefined();
  });

  describe('RegisterMassiveFlights_test', () => {
    it('Should persist flight massive', async() => {

      airplaneService.registerMassiveAirplanes(
        [
          {
            brand: 'Boeing',
            flightHours: 1500,
            code: 'AP-200',
            year: '2012',
            passangersCapacity: 250,
            maxWeightCapacity: 1500,
            isActive: true,
          }
        ]
      );

      expect(airplaneRepository.save).toHaveBeenCalledWith(
        {
          brand: 'Boeing',
          flightHours: 1500,
          code: 'AP-200',
          year: '2012',
          passangersCapacity: 250,
          maxWeightCapacity: 1500,
          isActive: true,
        }
      );

      expect(airplaneRepository.save);
    });
  });

  describe('DeleteMassiveFlights_test', () => {
    it('Should delete flights', async() => {

      let airplane1 = new AirplaneEntity('', 1, 'Boeing', '1500', 1, 1, true)

      let airplanesResponse = AirplaneEntity[1]
      airplanesResponse = [airplane1]

      jest.spyOn(airplaneRepository, 'findBy').mockReturnValue(Promise.resolve(airplanesResponse))
      jest.spyOn(airplaneRepository, 'delete')

      airplaneService.deleteMassiveAirplanes(
        [
          {
            id: "1",
            brand: 'Boeing',
            flightHours: 1500,
            code: 'AP-200',
            year: '2012',
            passangersCapacity: 250,
            maxWeightCapacity: 1500,
          }
        ]
      );

      expect(airplaneRepository.findBy);
      expect(airplaneRepository.delete);
      expect(airplaneRepository.findBy).toHaveBeenCalledTimes(1);
    });
    
    it('Should return a console.error()', async() => {
      jest.spyOn(airplaneRepository, 'findBy').mockRejectedValue(e => console.error("Error:: ", e))

      airplaneService.deleteMassiveAirplanes(
        [
          {
            id: "1",
            brand: 'Boeing',
            flightHours: 1500,
            code: 'AP-200',
            year: '2012',
            passangersCapacity: 250,
            maxWeightCapacity: 1500,
          }
        ]
      );

      expect(airplaneRepository.findBy).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetAllFlightsWithFilters_test', () => {
    it('Should get all flight with filters', async() => {

      let airplane1 = new AirplaneEntity('', 1, 'Boeing', '1500', 1, 1, true)

      let airplanesResponse = AirplaneEntity[1]
      airplanesResponse = [airplane1]

      jest.spyOn(airplaneRepository, 'findBy').mockReturnValue(Promise.resolve(airplanesResponse))

      airplaneService.getAllAirplanesWithFilters(
          {
            brand: 'Boeing',
            flightHours: 1500,
            year: '2012',
            passangersCapacity: 250,
            maxWeightCapacity: 1500,
            isActive: true,
          }
      );

      expect(airplaneRepository.findBy).toHaveBeenCalledTimes(1);
      expect(airplaneRepository.findBy);
    });
  });

  describe('UpdateMassiveFlightsById_test', () => {
    it('Should update massive flights', async() => {

      let airplane1 = new AirplaneEntity('', 1, 'Boeing', '1500', 1, 1, true)

      let airplanesResponse = AirplaneEntity[1]
      airplanesResponse = [airplane1]

      jest.spyOn(airplaneRepository, 'findBy').mockReturnValue(Promise.resolve(airplanesResponse))
      jest.spyOn(airplaneRepository, 'save').mockReturnValueOnce(Promise.resolve(airplane1))

      airplaneService.updateMassiveAirplanesById(
        [
          {
            id: "1",
            brand: 'Boeing',
            flightHours: 1500,
            code: 'AP-200',
            year: '2012',
            passangersCapacity: 250,
            maxWeightCapacity: 1500,
            isActive: true,
          }
        ]
      );

      expect(airplaneRepository.findBy);
      expect(airplaneRepository.findBy).toHaveBeenCalledTimes(1);
      expect(airplaneRepository.save);
    });
  });

});
