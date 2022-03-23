import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("fk_healthCheckupHospitals_users1_idx", ["userId"], {})
@Entity("healthCheckupHospitals", { schema: "planner_nhis" })
export class HealthCheckupHospitals {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "고유번호",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "userId", comment: "user고유번호", unsigned: true })
  userId: number;

  @Column("enum", {
    name: "resType",
    nullable: true,
    comment: "검진자구분(0:본인검진, 1:영유아건강검진, 2:영유아구강검진)",
    enum: ["0", "1", "2"],
  })
  resType: "0" | "1" | "2" | null;

  @Column("varchar", {
    name: "resCheckupType",
    nullable: true,
    comment: "검진종류",
    length: 100,
  })
  resCheckupType: string | null;

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
    name: "resOrganizationName",
    nullable: true,
    comment: "검진기관명",
    length: 100,
  })
  resOrganizationName: string | null;

  @Column("text", { name: "resOpinion", nullable: true, comment: "소견" })
  resOpinion: string | null;

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

  @ManyToOne(() => Users, (users) => users.healthCheckupHospitals, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;
}
