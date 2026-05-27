import { PartialType } from '@nestjs/mapped-types';
import { CreateInformeGfDto } from './create-informe_gf.dto';

export class UpdateInformeGfDto extends PartialType(CreateInformeGfDto) {}
