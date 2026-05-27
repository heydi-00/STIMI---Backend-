import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateNovedadDto {

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsInt()
  @IsNotEmpty()
  id_version: number;

  @IsInt()
  @IsNotEmpty()
  id_persona: number;

}
