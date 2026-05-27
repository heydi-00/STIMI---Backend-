import { IsString, IsNotEmpty, MaxLength, IsInt } from 'class-validator';

export class CreateInformeGcDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  version_gc: string;

  @IsInt()
  @IsNotEmpty()
  id_informe: number;

}