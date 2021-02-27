import { BadRequestException, PipeTransform } from "@nestjs/common";
import { NoteStatus } from "../note-status.enum";

export class NoteStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [
        NoteStatus.open,
        NoteStatus.in_progress,
        NoteStatus.done
    ];
    transform( value : any ) {
        if(this.isStatusValid(value)){
            throw new BadRequestException(`${value} is an invalid status`);
        }
    }
    private isStatusValid( status : any ) {
        const idx = this.allowedStatus.indexOf(status);
        return idx !== -1;
    }
}