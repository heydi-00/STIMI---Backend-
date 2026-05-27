import { IsString, IsNotEmpty, MaxLength, IsInt } from 'class-validator';

export class CreatePersonaDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  identificacion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  correo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  telefono: string;

  @IsInt()
  @IsNotEmpty()
  credencial: number;

  @IsInt()
  @IsNotEmpty()
  id_area: number;

}