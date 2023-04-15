import { ApiProperty } from '@nestjs/swagger';

export class FlightWebUpdateDto  {
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
    from: string;
    @ApiProperty()
    to: string;
    @ApiProperty()
    departureDate: string;
    @ApiProperty()
    arriveDate: string;
    @ApiProperty()
    type: string;
    @ApiProperty()
    isActive: boolean

    constructor(id: string, hasScales: boolean, price: string, departureTime: string, arriveTime: string, duration: string, from: string, to: string, departureDate: string, arriveDate: string, type: string, isActive: boolean) {
        this.id = id;
        this.hasScales = hasScales;
        this.price = price;
        this.departureTime = departureTime;
        this.arriveTime = arriveTime;
        this.duration = duration;
        this.from = from;
        this.to = to;
        this.departureDate = departureDate;
        this.arriveDate = arriveDate;
        this.type = type;
        this.isActive = isActive;
    }
}