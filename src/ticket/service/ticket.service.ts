import { Injectable, Body } from '@nestjs/common';
import { TicketDto } from '../model/dto/ticket.dto';
import { FlightDto } from '../model/dto/flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketEntity } from '../model/entity/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService {

    constructor(
        @InjectRepository(TicketEntity)
        private ticketRepository: Repository<TicketEntity>,
    ) {}

    async getAllFlights(ticket: TicketDto): Promise<FlightDto[]> {
        const query = `SELECT * FROM public.tb_flight where "from" = $1 and "to" = $2 and "departureDate" = $3;`

        const flightResponse =  await this.ticketRepository.query(query, [
            ticket.from,
            ticket.to,
            ticket.fromDate
        ]).then(flightsEntity => {
            return flightsEntity.map(f => {
                return new FlightDto(
                    false,
                    f.price,
                    f.departureTime,
                    f.arriveTime,
                    f.duration,
                    f.from,
                    f.to,
                    f.type
                );
            });
        }).catch(e => {
            console.error("Error:: ", e)
        })

        return flightResponse;
    }

    async getFlightsWithFilters(filter: Filter): Promise<FlightDto[]> {

        let query = `SELECT * FROM public.tb_flight` 

        switch (filter) {
            case Filter.CHEAP:
                query = `SELECT * FROM public.tb_flight order by price asc`; 
                break;
            case Filter.FAST:
                query = `SELECT * FROM public.tb_flight order by duration asc`; 
                break;
            case Filter.EARLY_DEPARTURE:
                query = `SELECT * FROM public.tb_flight order by "departureTime" asc`; 
                break;
            case Filter.EARLY_ARRIVE:
                query = `SELECT * FROM public.tb_flight order by "arriveTime" asc`; 
                break;
            case Filter.LAST_DEPARTURE:
                query = `SELECT * FROM public.tb_flight order by "departureTime" desc`; 
                break;
            case Filter.LAST_ARRIVE:
                query = `SELECT * FROM public.tb_flight order by "arriveTime" desc`; 
                break;
            default:
                break;
        }

        const flightResponse =  await this.ticketRepository.query(query)
        .then(flightsEntity => {
            return flightsEntity.map(f => {
                return new FlightDto(
                    false,
                    f.price,
                    f.departureTime,
                    f.arriveTime,
                    f.duration,
                    f.from,
                    f.to,
                    f.type
                );
            });
        }).catch(e => {
            console.error("Error:: ", e)
        })

        return flightResponse;
    }

}
