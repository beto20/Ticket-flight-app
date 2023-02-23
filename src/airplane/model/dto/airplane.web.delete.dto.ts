export class AirplaneWebDeleteDto {
    id: string
    brand: string;
    flightHours: number;
    code: string;
    year: string;
    passangersCapacity: number;
    maxWeightCapacity: number;    

    constructor(id: string, brand: string, flightHours: number, code: string, year: string,  passangersCapacity: number, maxWeightCapacity: number) {
        this.id = id;
        this.brand = brand;
        this.flightHours = flightHours;
        this.code = code;
        this.year = year;
        this.passangersCapacity = passangersCapacity;
        this.maxWeightCapacity = maxWeightCapacity;
    }

}