import { ApiProperty } from '@nestjs/swagger';

export class TicketDto  {
    @ApiProperty()
    isOneWay: boolean;
    @ApiProperty()
    from: string;
    @ApiProperty()
    to!: string;
    @ApiProperty()
    fromDate: string;
    @ApiProperty()
    toDate!: string;
    @ApiProperty()
    quantityPassangers: number;
    @ApiProperty()
    type: string;

    constructor(isOneWay: boolean, from: string, to: string, fromDate: string, toDate: string, quantityPassangers: number, type: string) {
        this.isOneWay = isOneWay;
        this.from = from;
        this.to = to;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.quantityPassangers = quantityPassangers;
        this.type = type;
    }
}