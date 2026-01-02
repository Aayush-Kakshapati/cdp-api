import { IsNumber, IsString, Min } from 'class-validator';

export class CreateDonationDto {
  @IsString()
  causeId: string;

  @IsNumber()
  @Min(1)
  amount: number;
}
