import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_ticket')
export class TicketEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    isOneWay: boolean;
    @Column()
    from: string;
    @Column()
    to: string;
    @Column()
    fromDate: string;
    @Column()
    toDate: string;
    @Column()
    quantityPassangers: number;
    @Column()
    type: string;
}