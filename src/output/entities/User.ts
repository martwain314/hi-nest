import { Column, Entity } from "typeorm";

@Entity("user", { schema: "nest_study" })
export class User {
  @Column("varchar", { primary: true, name: "id", length: 50 })
  id: string;

  @Column("varchar", { name: "password", length: 50 })
  password: string;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("datetime", {
    name: "reg_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  regDate: Date | null;
}
