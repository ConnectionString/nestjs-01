import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './note.entity';
import { NoteRepository } from './note.repository';

@Injectable()
export class NoteService {
    constructor( @InjectRepository(NoteRepository) private noteRepository : NoteRepository ) {

    }

    async getNotes() : Promise<Note[]> {
        return this.noteRepository.find();
    }

    async getTaskById( id : number ) : Promise<Note> {
        const result = await this.noteRepository.findOne(id);
        if(!result){
            throw new NotFoundException(`note with id ${id} not found.`)
        }
        return result;
    }
    
    async createNote( createNoteDto : CreateNoteDto ) : Promise<Note>{
        return this.noteRepository.createNote(createNoteDto);
    }

    async deleteNote( id : number ) : Promise<void>{
        const result = await this.noteRepository.delete(id);
        if(result.affected === 0){
            throw new NotFoundException(`note with id ${id} not found.`)
        }
    }

    async updateNote( id : number, updateNoteDto : UpdateNoteDto ) : Promise<Note> {
        const { title, description } = updateNoteDto;
        const result = await this.getTaskById(id);
        result.title = title;
        result.description = description;
        await result.save();
        return result;
    }
}
