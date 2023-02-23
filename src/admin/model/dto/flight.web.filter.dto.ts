export class FlightWebFilterDto  {
    hasScales: boolean;
    price: string;
    from: string;
    to: string;
    type: string;
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