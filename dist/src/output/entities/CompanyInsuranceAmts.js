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
exports.CompanyInsuranceAmts = void 0;
const typeorm_1 = require("typeorm");
const CompanyInsurances_1 = require("./CompanyInsurances");
const Users_1 = require("./Users");
let CompanyInsuranceAmts = class CompanyInsuranceAmts {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "id",
        comment: "고유번호",
        unsigned: true,
    }),
    __metadata("design:type", Number)
], CompanyInsuranceAmts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "companyInsuranceId",
        comment: "직장보험료고유번호",
        unsigned: true,
    }),
    __metadata("design:type", Number)
], CompanyInsuranceAmts.prototype, "companyInsuranceId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "userId", unsigned: true }),
    __metadata("design:type", Number)
], CompanyInsuranceAmts.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "resNoticeYm",
        nullable: true,
        comment: "고지년월",
        length: 10,
    }),
    __metadata("design:type", String)
], CompanyInsuranceAmts.prototype, "resNoticeYm", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "resMeanMonthlyIncome",
        nullable: true,
        comment: "평균보수월액",
    }),
    __metadata("design:type", Number)
], CompanyInsuranceAmts.prototype, "resMeanMonthlyIncome", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resHISettleUpReason",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], CompanyInsuranceAmts.prototype, "resHiSettleUpReason", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "createdAt",
        nullable: true,
        comment: "등록일자",
    }),
    __metadata("design:type", Date)
], CompanyInsuranceAmts.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "updatedAt",
        nullable: true,
        comment: "업데이트일자",
    }),
    __metadata("design:type", Date)
], CompanyInsuranceAmts.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyInsurances_1.CompanyInsurances, (companyInsurances) => companyInsurances.companyInsuranceAmts, { onDelete: "RESTRICT", onUpdate: "RESTRICT" }),
    (0, typeorm_1.JoinColumn)([{ name: "companyInsuranceId", referencedColumnName: "id" }]),
    __metadata("design:type", CompanyInsurances_1.CompanyInsurances)
], CompanyInsuranceAmts.prototype, "companyInsurance", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.companyInsuranceAmts, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "userId", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], CompanyInsuranceAmts.prototype, "user", void 0);
CompanyInsuranceAmts = __decorate([
    (0, typeorm_1.Index)("fk_companyInsuranceAmts_companyInsurances1_idx", ["companyInsuranceId"], {}),
    (0, typeorm_1.Index)("fk_companyInsuranceAmts_users1_idx", ["userId"], {}),
    (0, typeorm_1.Entity)("companyInsuranceAmts", { schema: "planner_nhis" })
], CompanyInsuranceAmts);
exports.CompanyInsuranceAmts = CompanyInsuranceAmts;
//# sourceMappingURL=CompanyInsuranceAmts.js.map