import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseDto } from './create-cause.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCauseDto extends PartialType(CreateCauseDto) {
  @IsOptional()
  @IsString()
  description?: string;
}
