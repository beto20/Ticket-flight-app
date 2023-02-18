import * as request from 'supertest';
import { INestApplication, Module } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TicketService } from './../src/ticket/service/ticket.service';
import { FlightDto } from '../src/ticket/model/dto/flight.dto';
import { TicketDto } from '../src/ticket/model/dto/ticket.dto';
import { TicketModule } from './../src/ticket/ticket.module';


describe('TicketController (e2e)', () => {
    let app: INestApplication
    let ticketService = { getAllFlights: (ticket: TicketDto) => {
        let flight1 = new FlightDto(false, "53.43","4:55","6:20","1:25","Lima","Cuzco")

        let flights = FlightDto[1]
        flights = [
            {
                hasScales: flight1.hasScales, 
                price: flight1.price,
                departure: flight1.departure,
                arrive: flight1.arrive,
                duration: flight1.duration,
                from: flight1.from,
                to: flight1.to
            }
        ]
        return flights
    }}

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [TicketModule],
        })
        .overrideProvider(TicketService)
        .useValue(ticketService)
        .compile();

        app = moduleRef.createNestApplication();
        await app.init()
    });

    it(`/POST api/v1/flights`, () => {
        const expected = ticketService.getAllFlights(new TicketDto(false, "Cuzco", "Lima","4:55","6:20", 1, "ECONOMY" ))
        console.log(expected)
        return request(app.getHttpServer())
        .post('/api/v1/flights')
        .expect(201)
        .expect(expected)
    });

    afterAll(async () => {
        await app.close();
    });
})