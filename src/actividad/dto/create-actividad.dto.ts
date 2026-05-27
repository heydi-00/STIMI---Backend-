import { IsString, IsNotEmpty, MaxLength, IsEnum, IsDateString, IsInt } from 'class-validator';

export class CreateActividadDto {

  @IsString()
  @IsNotEmpty({ })
  @MaxLength(100, { })
  competencia: string;

  @IsString()
  @IsNotEmpty({ })
  @MaxLength(50, { })
  ficha: string;

  @IsString()
  @IsNotEmpty({  })
  @MaxLength(250, { })
  resultado: string;

  @IsDateString({}, {  })
  @IsNotEmpty({  })
  fecha_inicio: Date;

  @IsDateString({}, {  })
  @IsNotEmpty({  })
  fecha_fin: Date;

  @IsNotEmpty({ })
  @IsEnum(['Aplica', 'No aplica'], { })
  estado: string;

  @IsInt({ })
  @IsNotEmpty({ })
  id_gc: number;

}