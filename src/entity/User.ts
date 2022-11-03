import { Entity, PrimaryColumn, Column } from "typeorm";
import { UuidService } from "../services/uuid";

@Entity()
export class User {
    @PrimaryColumn()
    uuid: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
}
