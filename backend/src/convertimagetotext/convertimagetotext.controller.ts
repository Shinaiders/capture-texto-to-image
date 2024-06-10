import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConvertimagetotextService } from './convertimagetotext.service';
import { CreateConvertimagetotextDto } from './dto/create-convertimagetotext.dto';
import { UpdateConvertimagetotextDto } from './dto/update-convertimagetotext.dto';

@Controller('convertimagetotext')
export class ConvertimagetotextController {
  constructor(private readonly convertimagetotextService: ConvertimagetotextService) {}

  @Post()
  create(@Body() createConvertimagetotextDto: CreateConvertimagetotextDto) {
    return this.convertimagetotextService.create(createConvertimagetotextDto);
  }

  @Get()
  findAll() {
    return this.convertimagetotextService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convertimagetotextService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConvertimagetotextDto: UpdateConvertimagetotextDto) {
    return this.convertimagetotextService.update(+id, updateConvertimagetotextDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.convertimagetotextService.remove(+id);
  }
}
