"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const log_middleware_1 = require("./log.middleware");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const healthcheck_controller_1 = require("./healthcheck/healthcheck.controller");
const configuration_1 = require("./config/configuration");
require("dotenv/config");
const user_controller_1 = require("./user/user.controller");
const User_1 = require("./output/entities/User");
const users_service_1 = require("./user/users-service");
const auth_module_1 = require("./user/auth/auth.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(log_middleware_1.LogMiddleware).forRoutes('user');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => config.get('database'),
            }),
            typeorm_1.TypeOrmModule.forFeature([User_1.User]),
        ],
        controllers: [app_controller_1.AppController, healthcheck_controller_1.HealthcheckController, user_controller_1.UserController],
        providers: [app_service_1.AppService, users_service_1.UsersService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map