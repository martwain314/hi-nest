import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import configuration from './config/configuration';
import { join } from 'path';
import 'dotenv/config';
import { UserController } from './user/user.controller';
import { User } from './output/entities/User';
import { UsersService } from './user/users-service';
import { AuthModule } from './user/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      // configuration 설정을 coifg module 불러 올 때 로드한다
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('database'),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, HealthcheckController, UserController],
  providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('user');
  }
}
