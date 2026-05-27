import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAreaDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombre: string;

}