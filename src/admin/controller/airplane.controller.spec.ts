import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AirplaneController } from './airplane.controller';
import { AirplaneEntity } from '../model/entity/airplane.entity';
import { AirplaneService } from '../service/airplane.service';

describe('AirplaneController', () => {
  let airplaneController: AirplaneController;
  let airplaneService: AirplaneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirplaneService, {
        provide: getRepositoryToken(AirplaneEntity),
        useValue: jest.fn()
      }],
      controllers: [AirplaneController],
    }).compile();

    airplaneService = module.get<AirplaneService>(AirplaneService);
    airplaneController = module.get<AirplaneController>(AirplaneController);
  });

  it('should be defined', () => {
    expect(airplaneController).toBeDefined();
  });

  describe('RegisterMassiveAirplanes_test', () => {
    it('should persist airplanes information', async() => {
      
      jest.spyOn(airplaneService, 'registerMassiveAirplanes').mockImplementation();

      airplaneController.registerMassiveAirplanes(
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

      expect(airplaneService.registerMassiveAirplanes).toBeCalledTimes(1);
      expect(airplaneController.registerMassiveAirplanes).toBeDefined();
    });
  });

  describe('DeleteMassiveAirplanes_test', () => {
    it('should delete airplanes', async() => {
      
      jest.spyOn(airplaneService, 'deleteMassiveAirplanes').mockImplementation();

      airplaneController.deleteMassiveAirplanes(
        [
          {
            id: "1",
            brand: 'Boeing',
            flightHours: 1500,
            code: 'AP-200',
            year: '2012',
            passangersCapacity: 250,
            maxWeightCapacity: 1500
          }
        ]
      );

      expect(airplaneService.deleteMassiveAirplanes).toBeCalledTimes(1);
      expect(airplaneController.deleteMassiveAirplanes).toBeDefined();
    });
  });


  describe('GetAllAirplanesWithFilters_test', () => {
    it('should get all airplanes with filters', async() => {
      
      jest.spyOn(airplaneService, 'getAllAirplanesWithFilters').mockImplementation();

      airplaneController.getAllAirplanesWithFilters(
        {
          brand: 'Boeing',
          flightHours: 1500,
          year: '2012',
          passangersCapacity: 250,
          maxWeightCapacity: 1500,
          isActive: true,
        }
      );

      expect(airplaneService.getAllAirplanesWithFilters).toBeCalledTimes(1);
      expect(airplaneController.getAllAirplanesWithFilters).toBeDefined();
    });
  });


  describe('UpdateMassiveAirplanesById_test', () => {
    it('should update airplanes information by id', async() => {
      
      jest.spyOn(airplaneService, 'updateMassiveAirplanesById').mockImplementation();

      airplaneController.updateMassiveAirplanesById(
        [
          {
            id: '1',
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

      expect(airplaneService.updateMassiveAirplanesById).toBeCalledTimes(1);
      expect(airplaneController.updateMassiveAirplanesById).toBeDefined();
    });
  });

});
