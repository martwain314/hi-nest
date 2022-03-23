import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CompanyInsuranceAmts } from "./CompanyInsuranceAmts";
import { Users } from "./Users";

@Index("fk_companyInsurances_users1_idx", ["userId"], {})
@Entity("companyInsurances", { schema: "planner_nhis" })
export class CompanyInsurances {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "고유번호",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "userId", comment: "user고유번호", unsigned: true })
  userId: number;

  @Column("char", {
    name: "resYear",
    nullable: true,
    comment: "조회년도",
    length: 4,
  })
  resYear: string | null;

  @Column("varchar", {
    name: "resHealthInsuranceCardNo",
    nullable: true,
    comment: "건강보험증번호",
    length: 45,
  })
  resHealthInsuranceCardNo: string | null;

  @Column("varchar", {
    name: "resCompanyNm",
    nullable: true,
    comment: "사업장명칭",
    length: 100,
  })
  resCompanyNm: string | null;

  @Column("char", {
    name: "commStartDate",
    nullable: true,
    comment: "취득일",
    length: 10,
  })
  commStartDate: string | null;

  @Column("char", {
    name: "commEndDate",
    nullable: true,
    comment: "상실일",
    length: 10,
  })
  commEndDate: string | null;

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

  @OneToMany(
    () => CompanyInsuranceAmts,
    (companyInsuranceAmts) => companyInsuranceAmts.companyInsurance
  )
  companyInsuranceAmts: CompanyInsuranceAmts[];

  @ManyToOne(() => Users, (users) => users.companyInsurances, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;
}
