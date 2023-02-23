import { Test, TestingModule } from '@nestjs/testing';
import { FlightService } from './flight.service';
import { Repository } from 'typeorm';
import { FlightEntity } from '../model/entity/flight.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('FlightService_test', () => {
  let flightService: FlightService;
  let flightRepository: Repository<FlightEntity>

  const FLIGHT_REPOSITORY_TOKEN = getRepositoryToken(FlightEntity)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightService, {
        provide: FLIGHT_REPOSITORY_TOKEN,
        useValue: {
          save: jest.fn(),
          findBy: jest.fn(),
          delete: jest.fn(),

        }
      },
    ],
    }).compile();

    flightService = module.get<FlightService>(FlightService);
    flightRepository = module.get<Repository<FlightEntity>>(FLIGHT_REPOSITORY_TOKEN)
  });

  it('FlightService should be defined', () => {
    expect(flightService).toBeDefined();
  });

  it('FlightRepository should be defined', () => {
    expect(flightRepository).toBeDefined();
  });

  describe('RegisterMassiveFlights_test', () => {
    it('Should persist flight massive', async() => {

      flightService.registerMassiveFlights(
        [
          {
            hasScales: true,
            price: '55.90',
            departureTime: '9:00',
            arriveTime: '10:50',
            duration: '1:50',
            from: 'Lima',
            to: 'Cuzco',
            departureDate: '13/02/2023',
            arriveDate: '13/02/2023',
            type: 'ECONOMY',
            isActive: true
          }
        ]
      );

      expect(flightRepository.save).toHaveBeenCalledWith(
        {
          hasScales: true,
          price: '55.90',
          departureTime: '9:00',
          arriveTime: '10:50',
          duration: '1:50',
          from: 'Lima',
          to: 'Cuzco',
          departureDate: '13/02/2023',
          arriveDate: '13/02/2023',
          type: 'ECONOMY',
          isActive: true
        }
      );

      expect(flightRepository.save);
    });
  });

  describe('DeleteMassiveFlights_test', () => {
    it('Should delete flights', async() => {

      let flight1 = new FlightEntity(false, "53.43", "9:00", "10:50", "1:50", "Lima", "Cuzco", "ECONOMY", "", "", true)

      let flightsResponse = FlightEntity[1]
      flightsResponse = [flight1]

      jest.spyOn(flightRepository, 'findBy').mockReturnValue(Promise.resolve(flightsResponse))
      jest.spyOn(flightRepository, 'delete')

      flightService.deleteMassiveFlights(
        [
          {
            id: "1",
            hasScales: true,
            price: '55.90',
            departureTime: '9:00',
            arriveTime: '10:50',
            duration: '1:50',
            departureDate: '13/02/2023',
            arriveDate: '13/02/2023',
            isActive: true
          }
        ]
      );

      expect(flightRepository.findBy);
      expect(flightRepository.delete);
      expect(flightRepository.findBy).toHaveBeenCalledTimes(1);
    });
    
    it('Should return a console.error()', async() => {
      jest.spyOn(flightRepository, 'findBy').mockRejectedValue(e => console.error("Error:: ", e))

      flightService.deleteMassiveFlights(
        [
          {
            id: "1",
            hasScales: true,
            price: '55.90',
            departureTime: '9:00',
            arriveTime: '10:50',
            duration: '1:50',
            departureDate: '13/02/2023',
            arriveDate: '13/02/2023',
            isActive: true
          }
        ]
      );

      expect(flightRepository.findBy).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetAllFlightsWithFilters_test', () => {
    it('Should get all flight with filters', async() => {

      let flight1 = new FlightEntity(false, "53.43", "9:00", "10:50", "1:50", "Lima", "Cuzco", "ECONOMY", "", "", true)

      let flightsResponse = FlightEntity[1]
      flightsResponse = [flight1]

      jest.spyOn(flightRepository, 'findBy').mockReturnValue(Promise.resolve(flightsResponse))

      flightService.getAllFlightsWithFilters(
          {
            hasScales: true,
            price: '55.90',
            from: 'Lima',
            to: 'Cuzco',
            type: 'ECONOMY',
            isActive: true
          }
      );

      expect(flightRepository.findBy).toHaveBeenCalledTimes(1);
      expect(flightRepository.findBy);
    });
  });

  describe('UpdateMassiveFlightsById_test', () => {
    it('Should update massive flights', async() => {

      let flight1 = new FlightEntity(false, "53.43", "9:00", "10:50", "1:50", "Lima", "Cuzco", "ECONOMY", "", "", true)

      let flightsResponse = FlightEntity[1]
      flightsResponse = [flight1]

      jest.spyOn(flightRepository, 'findBy').mockReturnValue(Promise.resolve(flightsResponse))
      jest.spyOn(flightRepository, 'save').mockReturnValueOnce(Promise.resolve(new FlightEntity(
          true,
          '55.90',
          '9:00',
          '10:50',
          '1:50',
          'Lima',
          'Cuzco',
          '13/02/2023',
          '13/02/2023',
          'ECONOMY',
          true
      )))

      flightService.updateMassiveFlightsById(
        [
          {
            id: "1",
            hasScales: true,
            price: '55.90',
            departureTime: '9:00',
            arriveTime: '10:50',
            duration: '1:50',
            from: 'Lima',
            to: 'Cuzco',
            departureDate: '13/02/2023',
            arriveDate: '13/02/2023',
            type: 'ECONOMY',
            isActive: true
          }
        ]
      );

      expect(flightRepository.findBy);
      expect(flightRepository.findBy).toHaveBeenCalledTimes(1);
      expect(flightRepository.save);
    });
  });

});
