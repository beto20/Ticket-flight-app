import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_offer')
export class OfferEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    offerPrice: number;
    @Column()
    regularPrice: number;
    @Column()
    from: string;
    @Column()
    to: string;
    @Column()
    expirationDate: string;
    @Column()
    season: string;
    @Column()
    isSeasonal: boolean;
    @Column()
    isClientExclusive: boolean;
    @Column()
    isLessRotation: boolean;

    constructor(offerPrice: number, regularPrice: number, from: string, to: string,  expirationDate: string, season: string, isSeasonal: boolean, isClientExclusive: boolean, isLessRotation: boolean) {
        this.offerPrice = offerPrice;
        this.regularPrice = regularPrice;
        this.from = from;
        this.to = to;
        this.expirationDate = expirationDate;
        this.season = season;
        this.isSeasonal = isSeasonal;
        this.isClientExclusive = isClientExclusive;
        this.isLessRotation = isLessRotation;
    }
}