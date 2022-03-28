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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const CompanyInsuranceAmts_1 = require("./CompanyInsuranceAmts");
const CompanyInsurances_1 = require("./CompanyInsurances");
const HealthCheckupHospitals_1 = require("./HealthCheckupHospitals");
const HealthCheckupResults_1 = require("./HealthCheckupResults");
const IdentityConfirmations_1 = require("./IdentityConfirmations");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "id",
        comment: "고유번호",
        unsigned: true,
    }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "signalUUID",
        nullable: true,
        comment: "시그널플래너UUID",
        length: 255,
    }),
    __metadata("design:type", String)
], Users.prototype, "signalUuid", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "birthDate",
        nullable: true,
        comment: "생년월일",
        length: 8,
    }),
    __metadata("design:type", String)
], Users.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "termsAgree",
        nullable: true,
        comment: "약관동의",
        enum: ["y"],
    }),
    __metadata("design:type", String)
], Users.prototype, "termsAgree", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "termsAgreeDate",
        nullable: true,
        comment: "약관동의일자",
    }),
    __metadata("design:type", Date)
], Users.prototype, "termsAgreeDate", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "termsCancel",
        nullable: true,
        comment: "약관동의취소여부",
        enum: ["y"],
    }),
    __metadata("design:type", String)
], Users.prototype, "termsCancel", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "termsCancelDate",
        nullable: true,
        comment: "약관동의취소일자",
    }),
    __metadata("design:type", Date)
], Users.prototype, "termsCancelDate", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "createdAt",
        nullable: true,
        comment: "등록일자",
    }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "updatedAt",
        nullable: true,
        comment: "업데이트일자",
    }),
    __metadata("design:type", Date)
], Users.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("char", { name: "ip", nullable: true, comment: "아이피", length: 20 }),
    __metadata("design:type", String)
], Users.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyInsuranceAmts_1.CompanyInsuranceAmts, (companyInsuranceAmts) => companyInsuranceAmts.user),
    __metadata("design:type", Array)
], Users.prototype, "companyInsuranceAmts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyInsurances_1.CompanyInsurances, (companyInsurances) => companyInsurances.user),
    __metadata("design:type", Array)
], Users.prototype, "companyInsurances", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HealthCheckupHospitals_1.HealthCheckupHospitals, (healthCheckupHospitals) => healthCheckupHospitals.user),
    __metadata("design:type", Array)
], Users.prototype, "healthCheckupHospitals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HealthCheckupResults_1.HealthCheckupResults, (healthCheckupResults) => healthCheckupResults.user),
    __metadata("design:type", Array)
], Users.prototype, "healthCheckupResults", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => IdentityConfirmations_1.IdentityConfirmations, (identityConfirmations) => identityConfirmations.user),
    __metadata("design:type", Array)
], Users.prototype, "identityConfirmations", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)("users", { schema: "planner_nhis" })
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.js.map