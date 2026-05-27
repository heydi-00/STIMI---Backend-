import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InformeObligacion } from './entities/informe-obligacion.entity';
import { CreateInformeObligacionDto } from './dto/create-informe-obligacion.dto';
import { UpdateInformeObligacionDto } from './dto/update-informe-obligacion.dto';

@Injectable()
export class InformeObligacionService {

  constructor(
    @InjectRepository(InformeObligacion)
    private readonly informeObligacionRepository: Repository<InformeObligacion>,
  ) {}

  async create(createInformeObligacionDto: CreateInformeObligacionDto): Promise<InformeObligacion> {
    const informeObligacion = this.informeObligacionRepository.create({
      ...createInformeObligacionDto,
      informe: { id_informe: createInformeObligacionDto.id_informe },
      obligacion: { id_obligacion: createInformeObligacionDto.id_obligacion },
    });
    return await this.informeObligacionRepository.save(informeObligacion);
  }

  async findAll(): Promise<InformeObligacion[]> {
    return await this.informeObligacionRepository.find();
  }

  async findOne(id: number): Promise<InformeObligacion> {
    const informeObligacion = await this.informeObligacionRepository.findOne({ where: { id } });
    if (!informeObligacion) throw new NotFoundException(`InformeObligacion con id ${id} no encontrada`);
    return informeObligacion;
  }

  async update(id: number, updateInformeObligacionDto: UpdateInformeObligacionDto): Promise<InformeObligacion> {
    await this.findOne(id);
    await this.informeObligacionRepository.update(id, {
      ...updateInformeObligacionDto,
      ...(updateInformeObligacionDto.id_informe && { informe: { id_informe: updateInformeObligacionDto.id_informe } }),
      ...(updateInformeObligacionDto.id_obligacion && { obligacion: { id_obligacion: updateInformeObligacionDto.id_obligacion } }),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.informeObligacionRepository.delete(id);
    return { message: `InformeObligacion con id ${id} eliminada correctamente` };
  }

}