import { IsString } from 'class-validator';

export class PaymentWebhookDto {
  @IsString()
  transactionId: string;

  @IsString()
  donationId: string;

  @IsString()
  status: string;

  @IsString()
  provider: string;
}
