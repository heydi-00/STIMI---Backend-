import { PartialType } from '@nestjs/mapped-types';
import { CreateObligacionesDto } from './create-obligaciones.dto';

export class UpdateObligacionesDto extends PartialType(CreateObligacionesDto) {}