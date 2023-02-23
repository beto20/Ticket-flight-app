import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_airplane')
export class AirplaneEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    brand: string;
    flightHours: number;
    code: string;
    year: string;
    passangersCapacity: number;
    maxWeightCapacity: number;    

    constructor(brand: string, flightHours: number, code: string, year: string,  passangersCapacity: number, maxWeightCapacity: number) {
        this.brand = brand;
        this.flightHours = flightHours;
        this.code = code;
        this.year = year;
        this.passangersCapacity = passangersCapacity;
        this.maxWeightCapacity = maxWeightCapacity;
    }
}