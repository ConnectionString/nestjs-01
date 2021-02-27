import { PipeTransform } from "@nestjs/common";
import { NoteStatus } from "../note-status.enum";
export declare class NoteStatusValidationPipe implements PipeTransform {
    readonly allowedStatus: NoteStatus[];
    transform(value: any): void;
    private isStatusValid;
}
