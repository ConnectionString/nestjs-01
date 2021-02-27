"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const note_status_enum_1 = require("../note-status.enum");
class NoteStatusValidationPipe {
    constructor() {
        this.allowedStatus = [
            note_status_enum_1.NoteStatus.open,
            note_status_enum_1.NoteStatus.in_progress,
            note_status_enum_1.NoteStatus.done
        ];
    }
    transform(value) {
        if (this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} is an invalid status`);
        }
    }
    isStatusValid(status) {
        const idx = this.allowedStatus.indexOf(status);
        return idx !== -1;
    }
}
exports.NoteStatusValidationPipe = NoteStatusValidationPipe;
//# sourceMappingURL=note-status-validation.pipe.js.map