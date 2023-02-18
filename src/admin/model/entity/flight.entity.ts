import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_flight')
export class FlightEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    hasScales: boolean;
    @Column()
    price: string;
    @Column()
    departureTime: string;
    @Column()
    arriveTime: string;
    @Column()
    duration: string;
    @Column()
    from: string;
    @Column()
    to: string;
    @Column()
    departureDate: string;
    @Column()
    arriveDate: string;
    @Column()
    type: string;
    @Column()
    isActive: boolean

    constructor(hasScales: boolean, price: string, departureTime: string, arriveTime: string, duration: string, from: string, to: string, departureDate: string, arriveDate: string, type: string, isActive: boolean) {
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