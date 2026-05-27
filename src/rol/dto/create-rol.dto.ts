import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateRolDto {

  @IsNotEmpty()
  @IsEnum(['Activo', 'Inactivo'])
  estado: string;

}