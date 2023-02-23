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

  describe('DeleteMassiveFlights_test', () => {
    it('should delete flights', async() => {
      
      jest.spyOn(flightService, 'deleteMassiveFlights').mockImplementation();

      flightController.deleteMassiveFlights(
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

      expect(flightService.deleteMassiveFlights).toBeCalledTimes(1);
      expect(flightController.deleteMassiveFlights).toBeDefined();
    });
  });


  describe('GetAllFlightsWithFilters_test', () => {
    it('should get all flights with filters', async() => {
      
      jest.spyOn(flightService, 'getAllFlightsWithFilters').mockImplementation();

      flightController.getAllFlightsWithFilters(
        {
          hasScales: true,
          price: '55.90',
          from: 'Lima',
          to: 'Cuzco',
          type: 'ECONOMY',
          isActive: true
        }
      );

      expect(flightService.getAllFlightsWithFilters).toBeCalledTimes(1);
      expect(flightController.getAllFlightsWithFilters).toBeDefined();
    });
  });


  describe('UpdateMassiveFlightsById_test', () => {
    it('should update flights information by id', async() => {
      
      jest.spyOn(flightService, 'updateMassiveFlightsById').mockImplementation();

      flightController.updateMassiveFlightsById(
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

      expect(flightService.updateMassiveFlightsById).toBeCalledTimes(1);
      expect(flightController.updateMassiveFlightsById).toBeDefined();
    });
  });

});
