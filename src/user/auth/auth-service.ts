import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "src/output/entities/User";
import { UsersService } from '../users-service';

@Injectable()
export default class AuthService {
  constructor(private readonly usersService: UsersService) {}

  public async login(id: string, password: string): Promise<User> {
    try {
      const userData = await this.usersService.findUser(id, password);
      if (!userData) {
        throw new HttpException(
          '가입되어 있지 않은 사용자 입니다.',
          HttpStatus.BAD_REQUEST,
        );
      }
      return userData;
    } catch (error) {
      throw new HttpException(
        '잘못된 인증 정보입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
