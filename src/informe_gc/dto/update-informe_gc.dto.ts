import { PartialType } from '@nestjs/mapped-types';
import { CreateInformeGcDto } from './create-informe_gc.dto';

export class UpdateInformeGcDto extends PartialType(CreateInformeGcDto) {}
