import { ApiProperty } from '@nestjs/swagger';

export class FlightWebFilterDto  {
    @ApiProperty()
    hasScales: boolean;
    @ApiProperty()
    price: string;
    @ApiProperty()
    from: string;
    @ApiProperty()
    to: string;
    @ApiProperty()
    type: string;
    @ApiProperty()
    isActive: boolean

    constructor(hasScales: boolean, price: string, from: string, to: string, type: string, isActive: boolean) {
        this.hasScales = hasScales;
        this.price = price;
        this.from = from;
        this.to = to;
        this.type = type;
        this.isActive = isActive;
    }
}