import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateInformeObligacionDto {

  @IsInt()
  @IsNotEmpty()
  id_informe: number;

  @IsInt()
  @IsNotEmpty()
  id_obligacion: number;

}