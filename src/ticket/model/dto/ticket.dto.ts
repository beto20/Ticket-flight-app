export class TicketDto  {
    isOneWay: boolean;
    from: string;
    to!: string;
    fromDate: string;
    toDate!: string;
    quantityPassangers: number;
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