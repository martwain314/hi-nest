import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CompanyInsurances } from "./CompanyInsurances";
import { Users } from "./Users";

@Index(
  "fk_companyInsuranceAmts_companyInsurances1_idx",
  ["companyInsuranceId"],
  {}
)
@Index("fk_companyInsuranceAmts_users1_idx", ["userId"], {})
@Entity("companyInsuranceAmts", { schema: "planner_nhis" })
export class CompanyInsuranceAmts {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "고유번호",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "companyInsuranceId",
    comment: "직장보험료고유번호",
    unsigned: true,
  })
  companyInsuranceId: number;

  @Column("int", { name: "userId", unsigned: true })
  userId: number;

  @Column("char", {
    name: "resNoticeYm",
    nullable: true,
    comment: "고지년월",
    length: 10,
  })
  resNoticeYm: string | null;

  @Column("int", {
    name: "resMeanMonthlyIncome",
    nullable: true,
    comment: "평균보수월액",
  })
  resMeanMonthlyIncome: number | null;

  @Column("varchar", {
    name: "resHISettleUpReason",
    nullable: true,
    length: 100,
  })
  resHiSettleUpReason: string | null;

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

  @ManyToOne(
    () => CompanyInsurances,
    (companyInsurances) => companyInsurances.companyInsuranceAmts,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "companyInsuranceId", referencedColumnName: "id" }])
  companyInsurance: CompanyInsurances;

  @ManyToOne(() => Users, (users) => users.companyInsuranceAmts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;
}
