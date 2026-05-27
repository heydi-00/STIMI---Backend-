import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateObligacionesDto {

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsInt()
  @IsNotEmpty()
  id_contrato: number;

}