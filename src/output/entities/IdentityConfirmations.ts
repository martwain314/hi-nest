import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("fk_identityConfirmations_users1_idx", ["userId"], {})
@Entity("identityConfirmations", { schema: "planner_nhis" })
export class IdentityConfirmations {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "고유번호",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "userId", comment: "user고유번호", unsigned: true })
  userId: number;

  @Column("varchar", {
    name: "resIssueNo",
    nullable: true,
    comment: "발급번호",
    length: 45,
  })
  resIssueNo: string | null;

  @Column("char", {
    name: "resUserBirth",
    nullable: true,
    comment: "생년월일",
    length: 10,
  })
  resUserBirth: string | null;

  @Column("varchar", {
    name: "resJoinUserType",
    nullable: true,
    comment: "가입자구분",
    length: 45,
  })
  resJoinUserType: string | null;

  @Column("varchar", {
    name: "resCompanyNm",
    nullable: true,
    comment: "사업장명(상호)",
    length: 45,
  })
  resCompanyNm: string | null;

  @Column("char", {
    name: "commStartDate",
    nullable: true,
    comment: "자격취득일",
    length: 10,
  })
  commStartDate: string | null;

  @Column("char", {
    name: "commEndDate",
    nullable: true,
    comment: "자격상실일",
    length: 10,
  })
  commEndDate: string | null;

  @Column("char", {
    name: "resIssueDate",
    nullable: true,
    comment: "발급일자",
    length: 10,
  })
  resIssueDate: string | null;

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

  @ManyToOne(() => Users, (users) => users.identityConfirmations, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;
}
