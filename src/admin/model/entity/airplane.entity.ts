import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_airplane')
export class AirplaneEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    brand: string;
    @Column()
    flightHours: number;
    @Column()
    code: string;
    @Column()
    year: string;
    @Column()
    passangersCapacity: number;
    @Column()
    maxWeightCapacity: number;
    @Column()
    isActive: boolean;

    constructor(brand: string, flightHours: number, code: string, year: string,  passangersCapacity: number, maxWeightCapacity: number, isActive: boolean) {
        this.brand = brand;
        this.flightHours = flightHours;
        this.code = code;
        this.year = year;
        this.passangersCapacity = passangersCapacity;
        this.maxWeightCapacity = maxWeightCapacity;
        this.isActive = isActive;
    }
}