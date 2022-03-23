import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/output/entities/User';
import AuthService from '../auth/auth-service';
import { LocalStrategy } from '../local-strategy';
import { UsersService } from '../users-service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  providers: [AuthService, LocalStrategy, UsersService],
})
export class AuthModule {}
