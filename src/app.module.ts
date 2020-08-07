import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FormModule } from "./form/form.module";

@Module({
  imports: [
    FormModule,
    MongooseModule.forRoot('mongodb+srv://john:qaz123@cluster0-ijlau.mongodb.net/formApp?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
