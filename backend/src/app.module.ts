import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvertimagetotextModule } from './convertimagetotext/convertimagetotext.module';

@Module({
  imports: [ConvertimagetotextModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
