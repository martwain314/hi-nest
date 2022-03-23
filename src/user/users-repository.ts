import { User } from 'src/output/entities/User';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}
