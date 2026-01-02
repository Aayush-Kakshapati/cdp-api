import { IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
