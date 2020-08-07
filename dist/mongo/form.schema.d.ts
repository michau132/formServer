import { Document } from 'mongoose';
interface Languages {
    language: string;
    skill: string;
}
interface ProgrammingLanguages {
    name: string;
    frameworks: string[];
}
export interface IFormApp {
    name: string;
    surname: string;
    programingLanguages: string[];
    languages: Languages[];
    phoneNumber: string;
    email: string;
    cv: null;
    relocation: boolean;
    git: string;
    linkedin: string;
    agreement: boolean;
    programmingDesc: string;
    programmingLanguages: ProgrammingLanguages[];
}
export declare class FormApp extends Document {
    name: string;
    surname: string;
    programingLanguages: string[];
    languages: Languages[];
    phoneNumber: string;
    email: string;
    cv: null;
    relocation: boolean;
    git: string;
    linkedin: string;
    agreement: boolean;
    programmingDesc: string;
    programmingLanguages: ProgrammingLanguages[];
}
export declare const FormAppSchema: import("mongoose").Schema<any>;
export {};
