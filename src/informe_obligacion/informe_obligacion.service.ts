import { Injectable } from '@nestjs/common';
import { CreateInformeObligacionDto } from './dto/create-informe_obligacion.dto';
import { UpdateInformeObligacionDto } from './dto/update-informe_obligacion.dto';

@Injectable()
export class InformeObligacionService {
  create(createInformeObligacionDto: CreateInformeObligacionDto) {
    return 'This action adds a new informeObligacion';
  }

  findAll() {
    return `This action returns all informeObligacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} informeObligacion`;
  }

  update(id: number, updateInformeObligacionDto: UpdateInformeObligacionDto) {
    return `This action updates a #${id} informeObligacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} informeObligacion`;
  }
}
