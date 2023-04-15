import { ApiProperty } from '@nestjs/swagger';

export class FlightWebDeleteDto  {
    @ApiProperty()
    id: string;
    @ApiProperty()
    hasScales: boolean;
    @ApiProperty()
    price: string;
    @ApiProperty()
    departureTime: string;
    @ApiProperty()
    arriveTime: string;
    @ApiProperty()
    duration: string;
    @ApiProperty()
    departureDate: string;
    @ApiProperty()
    arriveDate: string;
    @ApiProperty()
    isActive: boolean;

    constructor(hasScales: boolean, price: string, departureTime: string, arriveTime: string, duration: string, departureDate: string, arriveDate: string, isActive: boolean) {
        this.hasScales = hasScales;
        this.price = price;
        this.departureTime = departureTime;
        this.arriveTime = arriveTime;
        this.duration = duration;
        this.departureDate = departureDate;
        this.arriveDate = arriveDate;
        this.isActive = isActive;
    }
}