import { Injectable } from '@nestjs/common';
import { FlightDto } from '../model/dto/flight.dto';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Equal, In, Repository } from 'typeorm';
import { FlightEntity } from '../model/entity/flight.entity';
import { FlightWebDeleteDto } from '../model/dto/flight.web.delete.dto';
import { FlightWebFilterDto } from '../model/dto/flight.web.filter.dto';
import { FlightWebResponseDto } from '../model/dto/flight.web.response.dto';
import { FlightWebUpdateDto } from '../model/dto/flight.web.update.dto';

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

    deleteMassiveFlights(flights: FlightWebDeleteDto[]) {
        flights.map(f => {
            this.flightRepository.findBy({ 
                id: Equal(f.id),
                hasScales: Equal(f.hasScales), 
                price: Equal(f.price), 
                departureTime: Equal(f.departureTime), 
                arriveTime: Equal(f.arriveTime), 
                duration: Equal(f.duration), 
                departureDate: Equal(f.departureDate), 
                arriveDate: Equal(f.arriveDate),
                isActive: true,
            }).then(fes => {
                fes.forEach(entity => {
                    if(entity != null) {
                        this.flightRepository.delete(entity)
                    }
                })
            }).catch(e => {
                console.error("Error:: ", e)
            })
        })
    }

    async getAllFlightsWithFilters(flight: FlightWebFilterDto): Promise<FlightWebResponseDto[]> {
        const response = this.flightRepository.findBy({ 
            hasScales: Equal(flight.hasScales), 
            price: Equal(flight.price), 
            from: Equal(flight.from), 
            to: Equal(flight.to), 
            type: Equal(flight.type), 
            isActive: true
        }).then(flightsEntity => {

            if(flightsEntity != null) {
                return flightsEntity.map(f => {
                    return new FlightWebResponseDto(
                        f.hasScales, 
                        f.price, 
                        f.departureTime, 
                        f.arriveTime, 
                        f.duration, 
                        f.departureDate, 
                        f.arriveDate,
                        f.type,
                        f.isActive
                    );
                });
            }
        })
        return response
    }

    updateMassiveFlightsById(flights: FlightWebUpdateDto[]) {
        flights.map(f => {

            this.flightRepository.findBy({
                id: Equal(f.id)
            })
            .then(flights => {
                if(flights != null){
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
                }
            });
        })
    }

}
