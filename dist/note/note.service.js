"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const note_repository_1 = require("./note.repository");
let NoteService = class NoteService {
    constructor(noteRepository) {
        this.noteRepository = noteRepository;
    }
    async getNotes() {
        return this.noteRepository.find();
    }
    async getTaskById(id) {
        const result = await this.noteRepository.findOne(id);
        if (!result) {
            throw new common_1.NotFoundException(`note with id ${id} not found.`);
        }
        return result;
    }
    async createNote(createNoteDto) {
        return this.noteRepository.createNote(createNoteDto);
    }
    async deleteNote(id) {
        const result = await this.noteRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`note with id ${id} not found.`);
        }
    }
    async updateNote(id, updateNoteDto) {
        const { title, description } = updateNoteDto;
        const result = await this.getTaskById(id);
        result.title = title;
        result.description = description;
        await result.save();
        return result;
    }
};
NoteService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(note_repository_1.NoteRepository)),
    __metadata("design:paramtypes", [note_repository_1.NoteRepository])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map