import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyInsuranceAmts } from "./CompanyInsuranceAmts";
import { CompanyInsurances } from "./CompanyInsurances";
import { HealthCheckupHospitals } from "./HealthCheckupHospitals";
import { HealthCheckupResults } from "./HealthCheckupResults";
import { IdentityConfirmations } from "./IdentityConfirmations";

@Entity("users", { schema: "planner_nhis" })
export class Users {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "고유번호",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "signalUUID",
    nullable: true,
    comment: "시그널플래너UUID",
    length: 255,
  })
  signalUuid: string | null;

  @Column("char", {
    name: "birthDate",
    nullable: true,
    comment: "생년월일",
    length: 8,
  })
  birthDate: string | null;

  @Column("enum", {
    name: "termsAgree",
    nullable: true,
    comment: "약관동의",
    enum: ["y"],
  })
  termsAgree: "y" | null;

  @Column("datetime", {
    name: "termsAgreeDate",
    nullable: true,
    comment: "약관동의일자",
  })
  termsAgreeDate: Date | null;

  @Column("enum", {
    name: "termsCancel",
    nullable: true,
    comment: "약관동의취소여부",
    enum: ["y"],
  })
  termsCancel: "y" | null;

  @Column("datetime", {
    name: "termsCancelDate",
    nullable: true,
    comment: "약관동의취소일자",
  })
  termsCancelDate: Date | null;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    comment: "등록일자",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updatedAt",
    nullable: true,
    comment: "업데이트일자",
  })
  updatedAt: Date | null;

  @Column("char", { name: "ip", nullable: true, comment: "아이피", length: 20 })
  ip: string | null;

  @OneToMany(
    () => CompanyInsuranceAmts,
    (companyInsuranceAmts) => companyInsuranceAmts.user
  )
  companyInsuranceAmts: CompanyInsuranceAmts[];

  @OneToMany(
    () => CompanyInsurances,
    (companyInsurances) => companyInsurances.user
  )
  companyInsurances: CompanyInsurances[];

  @OneToMany(
    () => HealthCheckupHospitals,
    (healthCheckupHospitals) => healthCheckupHospitals.user
  )
  healthCheckupHospitals: HealthCheckupHospitals[];

  @OneToMany(
    () => HealthCheckupResults,
    (healthCheckupResults) => healthCheckupResults.user
  )
  healthCheckupResults: HealthCheckupResults[];

  @OneToMany(
    () => IdentityConfirmations,
    (identityConfirmations) => identityConfirmations.user
  )
  identityConfirmations: IdentityConfirmations[];
}
