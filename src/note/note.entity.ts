import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { NoteStatus } from "./note-status.enum";

@Entity()
export class Note extends BaseEntity {
    @PrimaryGeneratedColumn() id : number;

    @Column() title : string;

    @Column() description : string;

    @Column() status : NoteStatus;
}