import { Test, TestingModule } from '@nestjs/testing';
import { TicketController } from './ticket.controller';
import { TicketDto } from '../model/dto/ticket.dto';
import { FlightDto } from '../model/dto/flight.dto';
import { TicketService } from '../service/ticket.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TicketEntity } from '../model/entity/ticket.entity';

describe('TicketController', () => {
  let ticketController: TicketController;
  let ticketService : TicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketService, {
        provide: getRepositoryToken(TicketEntity),
        useValue: jest.fn()
      }],
      controllers: [TicketController],
    }).compile();

    ticketService = module.get<TicketService>(TicketService);
    ticketController = module.get<TicketController>(TicketController);
  });

  it('should be defined', () => {
    expect(ticketController).toBeDefined();
  });

  describe('Search flights', () => {
    it('should return information about flights', async() => {
      const request = new TicketDto(true, "Lima", "Cuzco", "13/02/2023", "20/02/2023", 1, "ECONOMY");
      let flightsResponse = FlightDto[1]

      jest.spyOn(ticketService, 'getAllFlights').mockReturnValue(Promise.resolve(flightsResponse));

      ticketController.searchFlights(request)
      
      expect(ticketService.getAllFlights).toBeCalledTimes(1);
      expect(ticketController.searchFlights).toBeDefined();
    });
  });

});
