import { IsDateString, IsEnum, IsInt, IsNotEmpty } from 'class-validator';

export class CreateVersionDto {

  @IsDateString()
  @IsNotEmpty()
  fecha: Date;

  @IsNotEmpty()
  @IsEnum(['Pendiente', 'Aprobado', 'Rechazado'])
  estado: string;

  @IsInt()
  @IsNotEmpty()
  id_contrato: number;

}