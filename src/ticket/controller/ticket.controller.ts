import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TicketDto } from '../model/dto/ticket.dto';
import { FlightDto } from '../model/dto/flight.dto';
import { TicketService } from '../service/ticket.service';
import { SkipAuth } from 'src/auth/util/auth.decorator';
import { ApiBody, ApiTags, ApiProperty } from '@nestjs/swagger';

@ApiTags('Flights')
@Controller('api/v1/flights')
export class TicketController {

    constructor(private readonly ticketService: TicketService) {
    }

    @ApiBody({ type: [TicketDto] })
    @SkipAuth()
    @Post()
    async searchFlights(@Body() ticket: TicketDto): Promise<FlightDto[]> {
        return this.ticketService.getAllFlights(ticket);
    }

    @ApiProperty({ enum: [ 'CHEAP', 'FAST', 'EARLY_DEPARTURE', 'EARLY_ARRIVE', 'LAST_DEPARTURE', 'LAST_ARRIVE'] })
    @SkipAuth()
    @Get()
    getFlightsWithFilters(@Param('filter') filter: Filter): Promise<FlightDto[]> {
        return this.ticketService.getFlightsWithFilters(filter);
    }
}
