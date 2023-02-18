import { Body, Controller, Post } from '@nestjs/common';
import { FlightDto } from '../model/dto/flight.dto';
import { FlightService } from '../service/flight.service';

@Controller('api/v1/back/flights')
export class FlightController {

    constructor(private readonly flightService: FlightService) {}

    @Post()
    registerMassiveFlights(@Body() flights: FlightDto[]) {
        this.flightService.registerMassiveFlights(flights);
    }
}
