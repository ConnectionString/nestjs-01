import { BaseEntity } from "typeorm";
import { NoteStatus } from "./note-status.enum";
export declare class Note extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: NoteStatus;
}
