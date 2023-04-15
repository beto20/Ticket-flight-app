import { Role } from "../enum/role";

export class UserDto {
    
    Id: String;
    username: String;
    password: String;
    email: String;
    roles: Role[];


    constructor(username: String, password: String, email: String, roles: Role[]) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.roles = roles;
    }
}