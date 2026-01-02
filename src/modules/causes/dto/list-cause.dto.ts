import { IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class ListCausesQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number = 20;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  active?: boolean;
}
