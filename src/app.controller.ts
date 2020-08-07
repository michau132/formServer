import { Controller, Get, Post, Body, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { FormAppSchema } from './mongo/form.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('*')
  // @Redirect('/', 404)
  // notFound() {
  //   return 'asd'
  // }

}
