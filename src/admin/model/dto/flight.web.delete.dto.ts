export class FlightWebDeleteDto  {
    id: string;
    hasScales: boolean;
    price: string;
    departureTime: string;
    arriveTime: string;
    duration: string;
    departureDate: string;
    arriveDate: string;
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