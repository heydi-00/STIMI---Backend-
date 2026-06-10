import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsInt,
  IsOptional,
  IsDateString,
  IsNumber,
  IsEnum,
} from 'class-validator';

export class CreateInformeGfDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  version_gf: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  numero_pago: string;

  @IsDateString()
  @IsNotEmpty()
  periodo_inicial: Date;

  @IsDateString()
  @IsNotEmpty()
  periodo_final: Date;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  valor_bruto: number;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  valor_neto: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  numero_planilla_pila?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  numero_compromiso_siif?: string;

  @IsString()
  @IsNotEmpty()
  actividades_desarrolladas: string;

  @IsEnum(['Pendiente', 'Enviado', 'Aprobado', 'Rechazado', 'Pagado'])
  @IsOptional()
  estado?: string;

  @IsString()
  @IsOptional()
  soportes_adjuntos?: string;

  @IsInt()
  @IsOptional()
  id_informe?: number;

  @IsInt()
  @IsOptional()
  id_version?: number;

  @IsInt()
  @IsOptional()
  id_contrato?: number;
}
