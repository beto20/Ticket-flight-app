export class AirplaneWebUpdateDto {
    id: string;
    brand: string;
    flightHours: number;
    code: string;
    year: string;
    passangersCapacity: number;
    maxWeightCapacity: number;
    isActive: boolean;    

    constructor(id: string, brand: string, flightHours: number, code: string, year: string,  passangersCapacity: number, maxWeightCapacity: number, isActive: boolean) {
        this.id = id;
        this.brand = brand;
        this.flightHours = flightHours;
        this.code = code;
        this.year = year;
        this.passangersCapacity = passangersCapacity;
        this.maxWeightCapacity = maxWeightCapacity;
        this.isActive = isActive;
    }

}