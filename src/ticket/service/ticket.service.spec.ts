import { Test, TestingModule } from '@nestjs/testing';
import { TicketService } from './ticket.service';
import { TicketDto } from '../model/dto/ticket.dto';
import { FlightDto } from '../model/dto/flight.dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TicketEntity } from '../model/entity/ticket.entity';
import { Repository } from 'typeorm';

describe('TicketService_test', () => {
  let ticketService: TicketService;
  let ticketRepository: Repository<TicketEntity>

  const TICKET_REPOSITORY_TOKEN = getRepositoryToken(TicketEntity)
  console.log(TICKET_REPOSITORY_TOKEN);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketService, {
        provide: TICKET_REPOSITORY_TOKEN,
        useValue: {
          find: jest.fn(),
          query: jest.fn()
        }
      },
    ],
    }).compile();

    ticketService = module.get<TicketService>(TicketService);
    ticketRepository = module.get<Repository<TicketEntity>>(TICKET_REPOSITORY_TOKEN)
  });

  it('TicketService should be defined', () => {
    expect(ticketService).toBeDefined();
  });

  it('TicketRepository should be defined', () => {
    expect(ticketRepository).toBeDefined();
  });

  describe('GetAllFlights_test', () => {
    it('Should return information about flights', async() => {
      const request = new TicketDto(true, "Lima", "Cuzco", "13/02/2023", "20/02/2023", 1, "ECONOMY");
      let flight1 = new FlightDto(false, "53.43", "9:00", "10:50", "1:50", "Lima", "Cuzco", "ECONOMY")

      let flightsResponse = FlightDto[1]
      flightsResponse = [flight1]

      jest.spyOn(ticketRepository, 'query').mockReturnValue(Promise.resolve(flightsResponse))
      ticketService.getAllFlights(request)

      expect(ticketRepository.query).toHaveBeenCalledTimes(1)
      expect(ticketService.getAllFlights).toBeDefined()
    });

    it('Should return a console.error()', async() => {
      const request = new TicketDto(true, "Lima", "Cuzco", "13/02/2023", "20/02/2023", 1, "ECONOMY");

      jest.spyOn(ticketRepository, 'query').mockRejectedValue(e => console.error("Error:: ", e))
      ticketService.getAllFlights(request)

      expect(ticketRepository.query).toHaveBeenCalledTimes(1)
    });

  })

});
