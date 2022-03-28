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
exports.CompanyInsurances = void 0;
const typeorm_1 = require("typeorm");
const CompanyInsuranceAmts_1 = require("./CompanyInsuranceAmts");
const Users_1 = require("./Users");
let CompanyInsurances = class CompanyInsurances {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "id",
        comment: "고유번호",
        unsigned: true,
    }),
    __metadata("design:type", Number)
], CompanyInsurances.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "userId", comment: "user고유번호", unsigned: true }),
    __metadata("design:type", Number)
], CompanyInsurances.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "resYear",
        nullable: true,
        comment: "조회년도",
        length: 4,
    }),
    __metadata("design:type", String)
], CompanyInsurances.prototype, "resYear", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resHealthInsuranceCardNo",
        nullable: true,
        comment: "건강보험증번호",
        length: 45,
    }),
    __metadata("design:type", String)
], CompanyInsurances.prototype, "resHealthInsuranceCardNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resCompanyNm",
        nullable: true,
        comment: "사업장명칭",
        length: 100,
    }),
    __metadata("design:type", String)
], CompanyInsurances.prototype, "resCompanyNm", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "commStartDate",
        nullable: true,
        comment: "취득일",
        length: 10,
    }),
    __metadata("design:type", String)
], CompanyInsurances.prototype, "commStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "commEndDate",
        nullable: true,
        comment: "상실일",
        length: 10,
    }),
    __metadata("design:type", String)
], CompanyInsurances.prototype, "commEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "createdAt",
        nullable: true,
        comment: "등록일자",
    }),
    __metadata("design:type", Date)
], CompanyInsurances.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "updatedAt",
        nullable: true,
        comment: "업데이트일자",
    }),
    __metadata("design:type", Date)
], CompanyInsurances.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyInsuranceAmts_1.CompanyInsuranceAmts, (companyInsuranceAmts) => companyInsuranceAmts.companyInsurance),
    __metadata("design:type", Array)
], CompanyInsurances.prototype, "companyInsuranceAmts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.companyInsurances, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "userId", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], CompanyInsurances.prototype, "user", void 0);
CompanyInsurances = __decorate([
    (0, typeorm_1.Index)("fk_companyInsurances_users1_idx", ["userId"], {}),
    (0, typeorm_1.Entity)("companyInsurances", { schema: "planner_nhis" })
], CompanyInsurances);
exports.CompanyInsurances = CompanyInsurances;
//# sourceMappingURL=CompanyInsurances.js.map