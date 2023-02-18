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

});
