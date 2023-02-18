import { Injectable } from '@nestjs/common';
import { FlightDto } from '../model/dto/flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlightEntity } from '../model/entity/flight.entity';

@Injectable()
export class FlightService {

    constructor(
        @InjectRepository(FlightEntity) 
        private flightRepository: Repository<FlightEntity>,
    ) {}

    registerMassiveFlights(flights: FlightDto[]) {
        flights.map(f => {
            let flightEntity = new FlightEntity(
                f.hasScales, 
                f.price, 
                f.departureTime, 
                f.arriveTime, 
                f.duration, 
                f.from, 
                f.to, 
                f.departureDate, 
                f.arriveDate,
                f.type, 
                f.isActive
            )
            return this.flightRepository.save(flightEntity);
        })
    }
}
