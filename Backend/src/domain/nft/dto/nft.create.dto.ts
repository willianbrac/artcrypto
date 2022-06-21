import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateNFTDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDecimal()
  @IsNotEmpty()
  price: number;
}
