import { PartialType } from '@nestjs/mapped-types';
import { CreateInformeObligacionDto } from './create-informe-obligacion.dto';

export class UpdateInformeObligacionDto extends PartialType(CreateInformeObligacionDto) {}
