import { IsString, IsNotEmpty, MaxLength, IsInt } from 'class-validator';

export class CreateInformeDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  tipologia: string;

  @IsInt()
  @IsNotEmpty()
  id_version: number;

}