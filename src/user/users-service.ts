import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/output/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user-dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findUser(id: string, password: string) {
    return await this.usersRepository.findOne({ id, password });
  }
  
  async create(userData: CreateUserDto) {
    // const newUser = await this.usersRepository.insert(userData);
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
