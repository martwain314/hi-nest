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
exports.HealthCheckupHospitals = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
let HealthCheckupHospitals = class HealthCheckupHospitals {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "id",
        comment: "고유번호",
        unsigned: true,
    }),
    __metadata("design:type", Number)
], HealthCheckupHospitals.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "userId", comment: "user고유번호", unsigned: true }),
    __metadata("design:type", Number)
], HealthCheckupHospitals.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "resType",
        nullable: true,
        comment: "검진자구분(0:본인검진, 1:영유아건강검진, 2:영유아구강검진)",
        enum: ["0", "1", "2"],
    }),
    __metadata("design:type", String)
], HealthCheckupHospitals.prototype, "resType", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resCheckupType",
        nullable: true,
        comment: "검진종류",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupHospitals.prototype, "resCheckupType", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "resCheckupYear",
        nullable: true,
        comment: "검진년도",
        length: 10,
    }),
    __metadata("design:type", String)
], HealthCheckupHospitals.prototype, "resCheckupYear", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "resCheckupDate",
        nullable: true,
        comment: "검진일자",
        length: 10,
    }),
    __metadata("design:type", String)
], HealthCheckupHospitals.prototype, "resCheckupDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resOrganizationName",
        nullable: true,
        comment: "검진기관명",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupHospitals.prototype, "resOrganizationName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "resOpinion", nullable: true, comment: "소견" }),
    __metadata("design:type", String)
], HealthCheckupHospitals.prototype, "resOpinion", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "createdAt",
        nullable: true,
        comment: "등록일자",
    }),
    __metadata("design:type", Date)
], HealthCheckupHospitals.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "updatedAt",
        nullable: true,
        comment: "업데이트일자",
    }),
    __metadata("design:type", Date)
], HealthCheckupHospitals.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.healthCheckupHospitals, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "userId", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], HealthCheckupHospitals.prototype, "user", void 0);
HealthCheckupHospitals = __decorate([
    (0, typeorm_1.Index)("fk_healthCheckupHospitals_users1_idx", ["userId"], {}),
    (0, typeorm_1.Entity)("healthCheckupHospitals", { schema: "planner_nhis" })
], HealthCheckupHospitals);
exports.HealthCheckupHospitals = HealthCheckupHospitals;
//# sourceMappingURL=HealthCheckupHospitals.js.map