import { IsString, IsNotEmpty, MaxLength, IsInt } from 'class-validator';

export class CreateInformeGfDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  version_gf: string;

  @IsInt()
  @IsNotEmpty()
  id_informe: number;

}