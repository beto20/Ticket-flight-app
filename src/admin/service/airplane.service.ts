import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AirplaneEntity } from "../../admin/model/entity/airplane.entity";
import { Equal, Repository } from 'typeorm';
import { AirplaneWebUpdateDto } from '../model/dto/airplane.web.update.dto';
import { AirplaneWebFilterDto } from '../model/dto/airplane.web.filter.dto';
import { AirplaneWebResponseDto } from '../model/dto/airplane.web.response.dto';
import { AirplaneWebDeleteDto } from '../model/dto/airplane.web.delete.dto';
import { AirplaneWebDto } from '../model/dto/airplane.web.dto';

@Injectable()
export class AirplaneService {

    constructor(
        @InjectRepository(AirplaneEntity)
        private airplaneRepository: Repository<AirplaneEntity>
    ) {}

    registerMassiveAirplanes(airplanes: AirplaneWebDto[]) {
        airplanes.map(a => {
            let entity = new AirplaneEntity(
                a.brand,
                a.flightHours,
                a.code,
                a.year,
                a.passangersCapacity,
                a.maxWeightCapacity,
                true
            )
            return this.airplaneRepository.save(entity);
        })
    }

    deleteMassiveAirplanes(airplanes: AirplaneWebDeleteDto[]) {
        airplanes.map(a => {
            this.airplaneRepository.findBy({ 
                id: Equal(a.id),
                brand: Equal(a.brand), 
                flightHours: Equal(a.flightHours), 
                code: Equal(a.code), 
                year: Equal(a.year), 
                passangersCapacity: Equal(a.passangersCapacity),
                maxWeightCapacity: Equal(a.maxWeightCapacity),
                isActive: true,
            }).then(fes => {
                fes.forEach(entity => {
                    if(entity != null) {
                        this.airplaneRepository.delete(entity)
                    }
                })
            }).catch(e => {
                console.error("Error:: ", e)
            })
        })
    }

    async getAllAirplanesWithFilters(airplane: AirplaneWebFilterDto): Promise<AirplaneWebResponseDto[]> {
        const response = this.airplaneRepository.findBy({ 
            brand: Equal(airplane.brand), 
            flightHours: Equal(airplane.flightHours), 
            year: Equal(airplane.year),
            passangersCapacity: Equal(airplane.passangersCapacity), 
            maxWeightCapacity: Equal(airplane.maxWeightCapacity), 
            isActive: true
        }).then(airplanesEntity => {

            if(airplanesEntity != null) {
                return airplanesEntity.map(a => {
                    return new AirplaneWebResponseDto(
                        a.brand, 
                        a.flightHours, 
                        a.code, 
                        a.year, 
                        a.passangersCapacity,
                        a.maxWeightCapacity,
                        a.isActive
                    );
                });
            }
        })
        return response
    }

    updateMassiveAirplanesById(airplanes: AirplaneWebUpdateDto[]) {
        airplanes.map(a => {

            this.airplaneRepository.findBy({
                id: Equal(a.id)
            })
            .then(airplanesEntity => {
                if(airplanesEntity != null){
                    let entity = new AirplaneEntity(
                        a.brand,
                        a.flightHours,
                        a.code,
                        a.year,
                        a.passangersCapacity,
                        a.maxWeightCapacity,
                        a.isActive
                    )
                    return this.airplaneRepository.save(entity);
                }
            });
        })
    }

}