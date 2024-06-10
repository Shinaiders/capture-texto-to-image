import { PartialType } from '@nestjs/mapped-types';
import { CreateConvertimagetotextDto } from './create-convertimagetotext.dto';

export class UpdateConvertimagetotextDto extends PartialType(CreateConvertimagetotextDto) {}
