import { PartialType } from '@nestjs/mapped-types';
import { CreateEvidenciasDto } from './create-evidencias.dto';

export class UpdateEvidenciasDto extends PartialType(CreateEvidenciasDto) {}
