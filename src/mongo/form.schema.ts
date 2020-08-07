import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface Languages {
  language: string;
  skill: string
}

interface ProgrammingLanguages {
  name: string;
  frameworks: string[]
}

export interface IFormApp {
  name: string;
  surname: string;
  programingLanguages: string[];
  languages: Languages[]
  phoneNumber: string;
  email: string;
  cv: null
  relocation: boolean;
  git: string;
  linkedin: string;
  agreement: boolean;
  programmingDesc: string
  programmingLanguages: ProgrammingLanguages[]
}

@Schema()
export class FormApp extends Document {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  programingLanguages: string[];

  @Prop()
  languages: Languages[]

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  cv: null

  @Prop()
  relocation: boolean;

  @Prop()
  git: string;

  @Prop()
  linkedin: string;

  @Prop()
  agreement: boolean;

  @Prop()
  programmingDesc: string

  @Prop()
  programmingLanguages: ProgrammingLanguages[]
}

export const FormAppSchema = SchemaFactory.createForClass(FormApp);