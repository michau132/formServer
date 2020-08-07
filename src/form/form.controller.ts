import { Controller, Get, Post, Body } from '@nestjs/common';

import { FormApp } from '../mongo/form.schema';
import { FormService } from "./form.service";
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('/create')
  saveForm(@Body() form: FormApp) {
    console.log(form)
    return this.formService.createFormApp(form)
  }
}
