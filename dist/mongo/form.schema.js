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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormAppSchema = exports.FormApp = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FormApp = class FormApp extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], FormApp.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], FormApp.prototype, "surname", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], FormApp.prototype, "programingLanguages", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], FormApp.prototype, "languages", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], FormApp.prototype, "phoneNumber", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], FormApp.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", void 0)
], FormApp.prototype, "cv", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], FormApp.prototype, "relocation", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], FormApp.prototype, "git", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], FormApp.prototype, "linkedin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], FormApp.prototype, "agreement", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], FormApp.prototype, "programmingDesc", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], FormApp.prototype, "programmingLanguages", void 0);
FormApp = __decorate([
    mongoose_1.Schema()
], FormApp);
exports.FormApp = FormApp;
exports.FormAppSchema = mongoose_1.SchemaFactory.createForClass(FormApp);
//# sourceMappingURL=form.schema.js.map