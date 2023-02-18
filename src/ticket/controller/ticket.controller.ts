import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketDto } from '../model/dto/ticket.dto';
import { FlightDto } from '../model/dto/flight.dto';
import { TicketService } from '../service/ticket.service';

@Controller('api/v1/flights')
export class TicketController {

    constructor(private readonly ticketService: TicketService) {
    }

    @Post()
    async searchFlights(@Body() ticket: TicketDto): Promise<FlightDto[]> {
        return this.ticketService.getAllFlights(ticket);
    }
}
