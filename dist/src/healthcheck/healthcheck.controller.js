"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthcheckController = void 0;
const common_1 = require("@nestjs/common");
const HealthCheckupResults_1 = require("../output/entities/HealthCheckupResults");
const typeorm_1 = require("typeorm");
let HealthcheckController = class HealthcheckController {
    async getAll() {
        const healthcheckResults = await (0, typeorm_1.getRepository)(HealthCheckupResults_1.HealthCheckupResults).find();
        return healthcheckResults;
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthcheckController.prototype, "getAll", null);
HealthcheckController = __decorate([
    (0, common_1.Controller)('healthcheck')
], HealthcheckController);
exports.HealthcheckController = HealthcheckController;
//# sourceMappingURL=healthcheck.controller.js.map