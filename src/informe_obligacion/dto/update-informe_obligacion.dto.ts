import { PartialType } from '@nestjs/mapped-types';
import { CreateInformeObligacionDto } from './create-informe_obligacion.dto';

export class UpdateInformeObligacionDto extends PartialType(CreateInformeObligacionDto) {}
