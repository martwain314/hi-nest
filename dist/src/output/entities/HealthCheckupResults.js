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
exports.HealthCheckupResults = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
let HealthCheckupResults = class HealthCheckupResults {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "int",
        name: "id",
        comment: "고유번호",
        unsigned: true,
    }),
    __metadata("design:type", Number)
], HealthCheckupResults.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "userId", comment: "user고유번호", unsigned: true }),
    __metadata("design:type", Number)
], HealthCheckupResults.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "resCheckupYear",
        nullable: true,
        comment: "검진년도",
        length: 10,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resCheckupYear", void 0);
__decorate([
    (0, typeorm_1.Column)("char", {
        name: "resCheckupDate",
        nullable: true,
        comment: "검진일자",
        length: 10,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resCheckupDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resCheckupPlace",
        nullable: true,
        comment: "검진장소",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resCheckupPlace", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resHeight",
        nullable: true,
        comment: "신장",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resHeight", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resWaist",
        nullable: true,
        comment: "허리둘레",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resWaist", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resBMI",
        nullable: true,
        comment: "체질량지수",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resBmi", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resSightLeft",
        nullable: true,
        comment: "좌시력",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resSightLeft", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resSightRight",
        nullable: true,
        comment: "우시력",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resSightRight", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resHearing",
        nullable: true,
        comment: "청력",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resHearing", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resBloodPressure",
        nullable: true,
        comment: "혈압",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resBloodPressure", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resUrinaryProtein",
        nullable: true,
        comment: "요단백",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resUrinaryProtein", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resHemoglobin",
        nullable: true,
        comment: "혈색소",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resHemoglobin", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resFastingBloodSuger",
        nullable: true,
        comment: "식전혈당",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resFastingBloodSuger", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resTotalCholesterol",
        nullable: true,
        comment: "총콜레스테롤",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resTotalCholesterol", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resHDLCholesterol",
        nullable: true,
        comment: "HDL콜레스테롤",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resHdlCholesterol", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resTriglyceride",
        nullable: true,
        comment: "트리글리세라이드",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resTriglyceride", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resLDLCholesterol",
        nullable: true,
        comment: "LDL콜레스테롤",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resLdlCholesterol", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resSerumCreatinine",
        nullable: true,
        comment: "혈청크레아티닌",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resSerumCreatinine", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resGFR",
        nullable: true,
        comment: "신사규체여과율(GFR)",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resGfr", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resAST",
        nullable: true,
        comment: "AST(SGOT)",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resAst", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resALT",
        nullable: true,
        comment: "ALT(SGPT)",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resAlt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resyGPT",
        nullable: true,
        comment: "감마지피티(y-GTP)",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resyGpt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resTBChestDisease",
        nullable: true,
        comment: "폐결핵흉부질환",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resTbChestDisease", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resOsteoporosis",
        nullable: true,
        comment: "골다공증",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resOsteoporosis", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resJudgement",
        nullable: true,
        comment: "판정",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resJudgement", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "createdAt",
        nullable: true,
        comment: "등록일자",
    }),
    __metadata("design:type", Date)
], HealthCheckupResults.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "updatedAt",
        nullable: true,
        comment: "업데이트일자",
    }),
    __metadata("design:type", Date)
], HealthCheckupResults.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "resWeight",
        nullable: true,
        comment: "체중",
        length: 100,
    }),
    __metadata("design:type", String)
], HealthCheckupResults.prototype, "resWeight", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.healthCheckupResults, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "userId", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], HealthCheckupResults.prototype, "user", void 0);
HealthCheckupResults = __decorate([
    (0, typeorm_1.Index)('userId', ['userId'], {}),
    (0, typeorm_1.Entity)('healthCheckupResults', { schema: 'planner_nhis' })
], HealthCheckupResults);
exports.HealthCheckupResults = HealthCheckupResults;
//# sourceMappingURL=HealthCheckupResults.js.map