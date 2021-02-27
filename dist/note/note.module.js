"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const note_controller_1 = require("./note.controller");
const note_repository_1 = require("./note.repository");
const note_service_1 = require("./note.service");
let NoteModule = class NoteModule {
};
NoteModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([note_repository_1.NoteRepository])
        ],
        controllers: [note_controller_1.NoteController],
        providers: [note_service_1.NoteService]
    })
], NoteModule);
exports.NoteModule = NoteModule;
//# sourceMappingURL=note.module.js.map