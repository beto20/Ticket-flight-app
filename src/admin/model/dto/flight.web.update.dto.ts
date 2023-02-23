export class FlightWebUpdateDto  {
    id: string;
    hasScales: boolean;
    price: string;
    departureTime: string;
    arriveTime: string;
    duration: string;
    from: string;
    to: string;
    departureDate: string;
    arriveDate: string;
    type: string;
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