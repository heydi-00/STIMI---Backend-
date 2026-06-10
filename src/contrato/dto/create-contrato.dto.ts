import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateContratoDto {
  @IsDateString()
  @IsNotEmpty()
  fecha_inicio: Date;

  @IsDateString()
  @IsOptional()
  fecha_fin: Date;

  @IsString()
  @IsOptional()
  numero_contrato: string;

  @IsNotEmpty()
  @IsEnum(['Agricola', 'Regular', 'Temporal'])
  tipo_contrato: string;

  @IsString()
  @IsOptional()
  numero_sif: string;

  @IsString()
  @IsOptional()
  numero_planilla_social: string;

  @IsNotEmpty()
  @IsEnum(['Activo', 'Terminado'])
  estado: string;

  @IsInt()
  @IsNotEmpty()
  id_persona: number;
}
