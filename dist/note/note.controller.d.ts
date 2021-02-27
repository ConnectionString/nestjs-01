import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './note.entity';
import { NoteService } from './note.service';
export declare class NoteController {
    private noteService;
    constructor(noteService: NoteService);
    getNote(): Promise<Note[]>;
    getTaskById(id: number): Promise<Note>;
    createNote(createNoteDto: CreateNoteDto): Promise<Note>;
    deleteNote(id: number): Promise<void>;
    updateNote(id: number, updateNoteDto: UpdateNoteDto): Promise<Note>;
}
