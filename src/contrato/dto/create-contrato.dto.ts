import { IsDateString, IsEnum, IsInt, IsNotEmpty } from 'class-validator';

export class CreateContratoDto {

  @IsDateString()
  @IsNotEmpty()
  fecha_inicio: Date;

  @IsDateString()
  @IsNotEmpty()
  fecha_fin: Date;

  @IsNotEmpty()
  @IsEnum(['Activo', 'Terminado'])
  estado: string;

  @IsInt()
  @IsNotEmpty()
  id_persona: number;

}