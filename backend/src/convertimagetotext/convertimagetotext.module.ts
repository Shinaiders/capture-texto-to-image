import { Module } from '@nestjs/common';
import { ConvertimagetotextService } from './convertimagetotext.service';
import { ConvertimagetotextController } from './convertimagetotext.controller';

@Module({
  controllers: [ConvertimagetotextController],
  providers: [ConvertimagetotextService],
})
export class ConvertimagetotextModule {}
