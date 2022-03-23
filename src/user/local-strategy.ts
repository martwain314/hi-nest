import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import AuthService from './auth/auth-service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'id', // super();를 통해 부모(PassportStrategy) 속성을 변경해 HTTP 요청 시 username 키 값이 아닌 user_id 키 값으로 요청이 가능하게 변경을 해줘야 합니다.
      passwordField: 'password',
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.login(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
