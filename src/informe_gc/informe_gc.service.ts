import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InformeGc } from './entities/informe_gc.entity';
import { CreateInformeGcDto } from './dto/create-informe_gc.dto';
import { UpdateInformeGcDto } from './dto/update-informe_gc.dto';

@Injectable()
export class InformeGcService {

  constructor(
    @InjectRepository(InformeGc)
    private readonly informeGcRepository: Repository<InformeGc>,
  ) {}

  async create(createInformeGcDto: CreateInformeGcDto): Promise<InformeGc> {
    const informeGc = this.informeGcRepository.create({
      ...createInformeGcDto,
      informe: { id_informe: createInformeGcDto.id_informe },
    });
    return await this.informeGcRepository.save(informeGc);
  }

  async findAll(): Promise<InformeGc[]> {
    return await this.informeGcRepository.find();
  }

  async findOne(id: number): Promise<InformeGc> {
    const informeGc = await this.informeGcRepository.findOne({ where: { id_gc: id } });
    if (!informeGc) throw new NotFoundException(`InformeGc con id ${id} no encontrado`);
    return informeGc;
  }

  async update(id: number, updateInformeGcDto: UpdateInformeGcDto): Promise<InformeGc> {
    await this.findOne(id);
    await this.informeGcRepository.update(id, {
      ...updateInformeGcDto,
      ...(updateInformeGcDto.id_informe && { informe: { id_informe: updateInformeGcDto.id_informe } }),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.informeGcRepository.delete(id);
    return { message: `InformeGc con id ${id} eliminado correctamente` };
  }

}