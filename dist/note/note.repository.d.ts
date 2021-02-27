import { Repository } from "typeorm";
import { CreateNoteDto } from "./dto/create-note.dto";
import { Note } from "./note.entity";
export declare class NoteRepository extends Repository<Note> {
    createNote(createNoteDto: CreateNoteDto): Promise<Note>;
}
