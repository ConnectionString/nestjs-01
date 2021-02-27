import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './note.entity';
import { NoteRepository } from './note.repository';
export declare class NoteService {
    private noteRepository;
    constructor(noteRepository: NoteRepository);
    getNotes(): Promise<Note[]>;
    getTaskById(id: number): Promise<Note>;
    createNote(createNoteDto: CreateNoteDto): Promise<Note>;
    deleteNote(id: number): Promise<void>;
    updateNote(id: number, updateNoteDto: UpdateNoteDto): Promise<Note>;
}
