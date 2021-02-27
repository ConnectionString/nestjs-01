import { EntityRepository, Repository } from "typeorm";
import { CreateNoteDto } from "./dto/create-note.dto";
import { NoteStatus } from "./note-status.enum";
import { Note } from "./note.entity";

@EntityRepository(Note)
export class NoteRepository extends Repository<Note> {
    async createNote( createNoteDto : CreateNoteDto ) : Promise<Note>{
        const { title, description } = createNoteDto;
        const note = new Note();
        note.title = title;
        note.description = description;
        note.status = NoteStatus.open;
        await note.save();
        return note;
    }
}