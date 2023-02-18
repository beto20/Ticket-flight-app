import { Test, TestingModule } from '@nestjs/testing';
import { FlightController } from './flight.controller';
import { FlightService } from '../service/flight.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FlightEntity } from '../model/entity/flight.entity';

describe('FlightController', () => {
  let flightController: FlightController;
  let flightService: FlightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightService, {
        provide: getRepositoryToken(FlightEntity),
        useValue: jest.fn()
      }],
      controllers: [FlightController],
    }).compile();

    flightService = module.get<FlightService>(FlightService);
    flightController = module.get<FlightController>(FlightController);
  });

  it('should be defined', () => {
    expect(flightController).toBeDefined();
  });

  describe('RegisterMassiveFlights_test', () => {
    it('should persist flights information', async() => {
      
      jest.spyOn(flightService, 'registerMassiveFlights').mockImplementation();

      flightController.registerMassiveFlights(
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

      expect(flightService.registerMassiveFlights).toBeCalledTimes(1);
      expect(flightController.registerMassiveFlights).toBeDefined();
    });
  });

});
