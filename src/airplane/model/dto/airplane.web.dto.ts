export class AirplaneWebDto {
    brand: string;
    flightHours: number;
    code: string;
    year: string;
    passangersCapacity: number;
    maxWeightCapacity: number;
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