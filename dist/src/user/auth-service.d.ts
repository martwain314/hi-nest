import { User } from "src/output/entities/User";
import { UsersService } from './users-service';
export default class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(id: string, password: string): Promise<User>;
}
