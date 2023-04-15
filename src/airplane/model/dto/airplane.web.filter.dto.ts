import { ApiProperty } from '@nestjs/swagger';
export class AirplaneWebFilterDto {
    @ApiProperty()
    brand: string;
    @ApiProperty()
    flightHours: number;
    @ApiProperty()
    year: string;
    @ApiProperty()
    passangersCapacity: number;
    @ApiProperty()
    maxWeightCapacity: number;
    @ApiProperty()
    isActive: boolean

    constructor(brand: string, flightHours: number, year: string,  passangersCapacity: number) {
        this.brand = brand;
        this.flightHours = flightHours;
        this.year = year;
        this.passangersCapacity = passangersCapacity;
    }
}