import { Injectable } from '@nestjs/common';
import { CreateNovedadDto } from './dto/create-novedad.dto';
import { UpdateNovedadDto } from './dto/update-novedad.dto';

@Injectable()
export class NovedadService {
  create(createNovedadDto: CreateNovedadDto) {
    return 'This action adds a new novedad';
  }

  findAll() {
    return `This action returns all novedad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} novedad`;
  }

  update(id: number, updateNovedadDto: UpdateNovedadDto) {
    return `This action updates a #${id} novedad`;
  }

  remove(id: number) {
    return `This action removes a #${id} novedad`;
  }
}
