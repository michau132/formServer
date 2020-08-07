import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FormAppSchema } from '../mongo/form.schema';
import { FormController } from './form.controller';
import { FormService } from './form.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'form', schema: FormAppSchema}])
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
