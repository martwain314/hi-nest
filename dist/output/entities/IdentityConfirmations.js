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
exports.IdentityConfirmations = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
let IdentityConfirmations = class IdentityConfirmations {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "id",
        comment: "고유번호",
        unsigned: true,
    }),
    __metadata("design:type", Number)
], IdentityConfirmations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "userId", comment: "user고유번호", unsigned: true }),
    __metadata("design:type", Number)
], IdentityConfirmations.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resIssueNo",
        nullable: true,
        comment: "발급번호",
        length: 45,
    }),
    __metadata("design:type", String)
], IdentityConfirmations.prototype, "resIssueNo", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "resUserBirth",
        nullable: true,
        comment: "생년월일",
        length: 10,
    }),
    __metadata("design:type", String)
], IdentityConfirmations.prototype, "resUserBirth", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resJoinUserType",
        nullable: true,
        comment: "가입자구분",
        length: 45,
    }),
    __metadata("design:type", String)
], IdentityConfirmations.prototype, "resJoinUserType", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resCompanyNm",
        nullable: true,
        comment: "사업장명(상호)",
        length: 45,
    }),
    __metadata("design:type", String)
], IdentityConfirmations.prototype, "resCompanyNm", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "commStartDate",
        nullable: true,
        comment: "자격취득일",
        length: 10,
    }),
    __metadata("design:type", String)
], IdentityConfirmations.prototype, "commStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "commEndDate",
        nullable: true,
        comment: "자격상실일",
        length: 10,
    }),
    __metadata("design:type", String)
], IdentityConfirmations.prototype, "commEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "resIssueDate",
        nullable: true,
        comment: "발급일자",
        length: 10,
    }),
    __metadata("design:type", String)
], IdentityConfirmations.prototype, "resIssueDate", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "createdAt",
        nullable: true,
        comment: "등록일자",
    }),
    __metadata("design:type", Date)
], IdentityConfirmations.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "updatedAt",
        nullable: true,
        comment: "업데이트일자",
    }),
    __metadata("design:type", Date)
], IdentityConfirmations.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.identityConfirmations, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "userId", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], IdentityConfirmations.prototype, "user", void 0);
IdentityConfirmations = __decorate([
    (0, typeorm_1.Index)("fk_identityConfirmations_users1_idx", ["userId"], {}),
    (0, typeorm_1.Entity)("identityConfirmations", { schema: "planner_nhis" })
], IdentityConfirmations);
exports.IdentityConfirmations = IdentityConfirmations;
//# sourceMappingURL=IdentityConfirmations.js.map