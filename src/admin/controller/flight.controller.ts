import { Body, Controller, Delete, Post, Put, Get, UseGuards } from '@nestjs/common';
import { FlightDto } from '../model/dto/flight.dto';
import { FlightService } from '../service/flight.service';
import { FlightWebDeleteDto } from '../model/dto/flight.web.delete.dto';
import { FlightWebFilterDto } from '../model/dto/flight.web.filter.dto';
import { FlightWebUpdateDto } from '../model/dto/flight.web.update.dto';
import { FlightWebResponseDto } from '../model/dto/flight.web.response.dto';
import { Role } from 'src/user/model/enum/role';
import { Roles } from 'src/user/util/roles.decorator';
import { AuthGuard } from 'src/auth/util/auth.guard';

@Controller('api/v1/back/flights')
export class FlightController {

    constructor(private readonly flightService: FlightService) {}

    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Post('/massive-save')
    registerMassiveFlights(@Body() flights: FlightDto[]) {
        this.flightService.registerMassiveFlights(flights);
    }

    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Delete('/massive-delete')
    deleteMassiveFlights(@Body() flights: FlightWebDeleteDto[]) {
        this.flightService.deleteMassiveFlights(flights);
    }

    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Get('/get-with-filters')
    async getAllFlightsWithFilters(@Body() flights: FlightWebFilterDto): Promise<FlightWebResponseDto[]> {
        return this.flightService.getAllFlightsWithFilters(flights);
    }

    @UseGuards(AuthGuard)
    @Roles(Role.admin)
    @Put('/massive-update')
    updateMassiveFlightsById(@Body() flights: FlightWebUpdateDto[]) {
        this.flightService.updateMassiveFlightsById(flights);
    }
}
