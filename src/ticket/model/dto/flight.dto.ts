export class FlightDto  {
    hasScales: boolean;
    price: string;
    departure: string;
    arrive: string;
    duration: string;
    from: string;
    to: string;
    type: string;

    constructor(hasScales: boolean, price: string, departure: string, arrive: string, duration: string, from: string, to: string, type: string) {
        this.hasScales = hasScales;
        this.price = price;
        this.departure = departure;
        this.arrive = arrive;
        this.duration = duration;
        this.from = from;
        this.to = to;
        this.type = type;
    }
}