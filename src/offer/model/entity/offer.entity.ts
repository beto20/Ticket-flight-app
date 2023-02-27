import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_offer')
export class OfferEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    offerPrice: number;
    regularPrice: number;
    from: string;
    to: string;
    expirationDate: string;
    season: string;
    isSeasonal: boolean;
    isClientExclusive: boolean;
    isLessRotation: boolean;
}