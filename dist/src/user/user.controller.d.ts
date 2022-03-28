import { CreateUserDto } from './dto/create-user-dto';
import { LoginUserDto } from './dto/login-user-dto';
import { UsersService } from './users-service';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(joinInfo: CreateUserDto): Promise<import("../output/entities/User").User>;
    login(loginInfo: LoginUserDto): Promise<string>;
}
