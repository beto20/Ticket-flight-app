import { ApiProperty } from '@nestjs/swagger';

export class AirplaneWebDto {
    @ApiProperty()
    brand: string;
    @ApiProperty()
    flightHours: number;
    @ApiProperty()
    code: string;
    @ApiProperty()
    year: string;
    @ApiProperty()
    passangersCapacity: number;
    @ApiProperty()
    maxWeightCapacity: number;
    @ApiProperty()
    isActive: boolean    

    constructor(brand: string, flightHours: number, code: string, year: string,  passangersCapacity: number, maxWeightCapacity: number) {
        this.brand = brand;
        this.flightHours = flightHours;
        this.code = code;
        this.year = year;
        this.passangersCapacity = passangersCapacity;
        this.maxWeightCapacity = maxWeightCapacity;
    }

}