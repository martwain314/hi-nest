import { User } from "src/output/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user-dto";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findUser(id: string, password: string): Promise<User>;
    create(userData: CreateUserDto): Promise<User>;
}
