import { IsNumber, IsString, Min } from 'class-validator';

export class CreateCauseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(1)
  goalAmount: number;
}
