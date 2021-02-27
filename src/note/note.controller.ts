import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './note.entity';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
    constructor( private noteService : NoteService ) {

    }

    @Get()
    getNote() : Promise<Note[]> {
        return this.noteService.getNotes();
    }

    @Get('/:id')
    getTaskById( @Param('id', ParseIntPipe) id : number ) : Promise<Note> {
        return this.noteService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createNote( @Body() createNoteDto : CreateNoteDto ) : Promise<Note> {
        return this.noteService.createNote(createNoteDto);
    }

    @Delete('/:id')
    deleteNote( @Param('id', ParseIntPipe) id : number ) : Promise<void>{
        return this.noteService.deleteNote(id);
    }

    @Put('/:id')
    updateNote( @Param('id', ParseIntPipe) id : number, @Body() updateNoteDto : UpdateNoteDto ) : Promise<Note> {
        return this.noteService.updateNote(id, updateNoteDto);
    }
}
