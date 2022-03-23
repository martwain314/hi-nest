import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user-dto';
import { LoginUserDto } from './dto/login-user-dto';
import { UsersService } from './users-service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/join')
  async register(@Body() joinInfo: CreateUserDto) {
    return this.usersService.create(joinInfo);
  }
  
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Body() loginInfo: LoginUserDto) {
    return `Hello! ${loginInfo.id}`;
  }
}
