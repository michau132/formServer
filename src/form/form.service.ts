import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { FormApp } from "../mongo/form.schema";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FormService {
  constructor(@InjectModel('form') private formSchema: Model<FormApp>) {}

  async createFormApp(data: FormApp): Promise<FormApp> {
    const createdForm = new this.formSchema(data)
    return createdForm.save()
  }
}
