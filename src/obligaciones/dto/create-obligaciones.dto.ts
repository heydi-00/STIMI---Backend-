import { IsString, IsNotEmpty, IsInt, IsEnum, IsOptional } from 'class-validator';

export class CreateObligacionesDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsEnum(['Pendiente', 'Realizada'])
  @IsOptional()
  estado: string;

  @IsString()
  @IsOptional()
  tipo_dependencia: string;

  @IsInt()
  @IsNotEmpty()
  id_contrato: number;
}
