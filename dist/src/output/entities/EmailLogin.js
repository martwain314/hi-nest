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
exports.EmailLogin = void 0;
const typeorm_1 = require("typeorm");
let EmailLogin = class EmailLogin {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "email", length: 50 }),
    __metadata("design:type", String)
], EmailLogin.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "user_name", length: 45 }),
    __metadata("design:type", String)
], EmailLogin.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "password", length: 50 }),
    __metadata("design:type", String)
], EmailLogin.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "reg_date",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], EmailLogin.prototype, "regDate", void 0);
EmailLogin = __decorate([
    (0, typeorm_1.Entity)("email_login", { schema: "nest_study" })
], EmailLogin);
exports.EmailLogin = EmailLogin;
//# sourceMappingURL=EmailLogin.js.map