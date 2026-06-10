import { IsString, IsNotEmpty, MaxLength, IsInt, IsOptional } from 'class-validator';

export class CreateEvidenciasDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  carpeta_obligacion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  fotografia: string;

  @IsInt()
  @IsNotEmpty()
  id_actividad: number;

  @IsInt()
  @IsOptional()
  id_obligacion?: number;
}
