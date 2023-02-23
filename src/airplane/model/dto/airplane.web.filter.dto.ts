export class AirplaneWebFilterDto {
    brand: string;
    flightHours: number;
    year: string;
    passangersCapacity: number;
    maxWeightCapacity: number;
    isActive: boolean

    constructor(brand: string, flightHours: number, year: string,  passangersCapacity: number) {
        this.brand = brand;
        this.flightHours = flightHours;
        this.year = year;
        this.passangersCapacity = passangersCapacity;
    }
}