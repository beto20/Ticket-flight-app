import { Body, Controller, Delete, Post, Put, Get } from '@nestjs/common';
import { FlightDto } from '../model/dto/flight.dto';
import { FlightService } from '../service/flight.service';
import { FlightWebDeleteDto } from '../model/dto/flight.web.delete.dto';
import { FlightWebFilterDto } from '../model/dto/flight.web.filter.dto';
import { FlightWebUpdateDto } from '../model/dto/flight.web.update.dto';
import { FlightWebResponseDto } from '../model/dto/flight.web.response.dto';

@Controller('api/v1/back/flights')
export class FlightController {

    constructor(private readonly flightService: FlightService) {}

    @Post('/massive-save')
    registerMassiveFlights(@Body() flights: FlightDto[]) {
        this.flightService.registerMassiveFlights(flights);
    }

    @Delete('/massive-delete')
    deleteMassiveFlights(@Body() flights: FlightWebDeleteDto[]) {
        this.flightService.deleteMassiveFlights(flights);
    }

    @Get('/get-with-filters')
    async getAllFlightsWithFilters(@Body() flights: FlightWebFilterDto): Promise<FlightWebResponseDto[]> {
        return this.flightService.getAllFlightsWithFilters(flights);
    }

    @Put('/massive-update')
    updateMassiveFlightsById(@Body() flights: FlightWebUpdateDto[]) {
        this.flightService.updateMassiveFlightsById(flights);
    }
}
