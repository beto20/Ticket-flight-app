import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TicketDto } from '../model/dto/ticket.dto';
import { FlightDto } from '../model/dto/flight.dto';
import { TicketService } from '../service/ticket.service';
import { SkipAuth } from 'src/auth/util/auth.decorator';

@Controller('api/v1/flights')
export class TicketController {

    constructor(private readonly ticketService: TicketService) {
    }

    @SkipAuth()
    @Post()
    async searchFlights(@Body() ticket: TicketDto): Promise<FlightDto[]> {
        return this.ticketService.getAllFlights(ticket);
    }

    @SkipAuth()
    @Get()
    getFlightsWithFilters(@Param('filter') filter: Filter): Promise<FlightDto[]> {
        return this.ticketService.getFlightsWithFilters(filter);
    }
}
