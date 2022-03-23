import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index('userId', ['userId'], {})
@Entity('healthCheckupResults', { schema: 'planner_nhis' })
export class HealthCheckupResults {
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
    name: "resCheckupYear",
    nullable: true,
    comment: "검진년도",
    length: 10,
  })
  resCheckupYear: string | null;

  @Column("char", {
    name: "resCheckupDate",
    nullable: true,
    comment: "검진일자",
    length: 10,
  })
  resCheckupDate: string | null;

  @Column("varchar", {
    name: "resCheckupPlace",
    nullable: true,
    comment: "검진장소",
    length: 100,
  })
  resCheckupPlace: string | null;

  @Column("varchar", {
    name: "resHeight",
    nullable: true,
    comment: "신장",
    length: 100,
  })
  resHeight: string | null;

  @Column("varchar", {
    name: "resWaist",
    nullable: true,
    comment: "허리둘레",
    length: 100,
  })
  resWaist: string | null;

  @Column("varchar", {
    name: "resBMI",
    nullable: true,
    comment: "체질량지수",
    length: 100,
  })
  resBmi: string | null;

  @Column("varchar", {
    name: "resSightLeft",
    nullable: true,
    comment: "좌시력",
    length: 100,
  })
  resSightLeft: string | null;

  @Column("varchar", {
    name: "resSightRight",
    nullable: true,
    comment: "우시력",
    length: 100,
  })
  resSightRight: string | null;

  @Column("varchar", {
    name: "resHearing",
    nullable: true,
    comment: "청력",
    length: 100,
  })
  resHearing: string | null;

  @Column("varchar", {
    name: "resBloodPressure",
    nullable: true,
    comment: "혈압",
    length: 100,
  })
  resBloodPressure: string | null;

  @Column("varchar", {
    name: "resUrinaryProtein",
    nullable: true,
    comment: "요단백",
    length: 100,
  })
  resUrinaryProtein: string | null;

  @Column("varchar", {
    name: "resHemoglobin",
    nullable: true,
    comment: "혈색소",
    length: 100,
  })
  resHemoglobin: string | null;

  @Column("varchar", {
    name: "resFastingBloodSuger",
    nullable: true,
    comment: "식전혈당",
    length: 100,
  })
  resFastingBloodSuger: string | null;

  @Column("varchar", {
    name: "resTotalCholesterol",
    nullable: true,
    comment: "총콜레스테롤",
    length: 100,
  })
  resTotalCholesterol: string | null;

  @Column("varchar", {
    name: "resHDLCholesterol",
    nullable: true,
    comment: "HDL콜레스테롤",
    length: 100,
  })
  resHdlCholesterol: string | null;

  @Column("varchar", {
    name: "resTriglyceride",
    nullable: true,
    comment: "트리글리세라이드",
    length: 100,
  })
  resTriglyceride: string | null;

  @Column("varchar", {
    name: "resLDLCholesterol",
    nullable: true,
    comment: "LDL콜레스테롤",
    length: 100,
  })
  resLdlCholesterol: string | null;

  @Column("varchar", {
    name: "resSerumCreatinine",
    nullable: true,
    comment: "혈청크레아티닌",
    length: 100,
  })
  resSerumCreatinine: string | null;

  @Column("varchar", {
    name: "resGFR",
    nullable: true,
    comment: "신사규체여과율(GFR)",
    length: 100,
  })
  resGfr: string | null;

  @Column("varchar", {
    name: "resAST",
    nullable: true,
    comment: "AST(SGOT)",
    length: 100,
  })
  resAst: string | null;

  @Column("varchar", {
    name: "resALT",
    nullable: true,
    comment: "ALT(SGPT)",
    length: 100,
  })
  resAlt: string | null;

  @Column("varchar", {
    name: "resyGPT",
    nullable: true,
    comment: "감마지피티(y-GTP)",
    length: 100,
  })
  resyGpt: string | null;

  @Column("varchar", {
    name: "resTBChestDisease",
    nullable: true,
    comment: "폐결핵흉부질환",
    length: 100,
  })
  resTbChestDisease: string | null;

  @Column("varchar", {
    name: "resOsteoporosis",
    nullable: true,
    comment: "골다공증",
    length: 100,
  })
  resOsteoporosis: string | null;

  @Column("varchar", {
    name: "resJudgement",
    nullable: true,
    comment: "판정",
    length: 100,
  })
  resJudgement: string | null;

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

  @Column("varchar", {
    name: "resWeight",
    nullable: true,
    comment: "체중",
    length: 100,
  })
  resWeight: string | null;

  @ManyToOne(() => Users, (users) => users.healthCheckupResults, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;
}
