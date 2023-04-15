import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enum/role";

@Entity('tb_user')
export class UserEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    email: string;
    @Column()
    roles: string;

    constructor(username: string, password: string, email: string, roles: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.roles = roles;
    }
}