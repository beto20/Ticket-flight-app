import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TicketDto } from '../model/dto/ticket.dto';
import { FlightDto } from '../model/dto/flight.dto';
import { TicketService } from '../service/ticket.service';
import { SkipAuth } from 'src/auth/auth.decorator';
import { Roles } from 'src/user/roles.decorator';
import { Role } from 'src/user/role';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('api/v1/flights')
export class TicketController {

    constructor(private readonly ticketService: TicketService) {
    }

    // @SkipAuth()
    @UseGuards(AuthGuard)
    @Roles(Role.user)
    @Post()
    async searchFlights(@Body() ticket: TicketDto): Promise<FlightDto[]> {
        return this.ticketService.getAllFlights(ticket);
    }

    @Get()
    getFlightsWithFilters(@Param('filter') filter: Filter): Promise<FlightDto[]> {
        return this.ticketService.getFlightsWithFilters(filter);
    }
}
