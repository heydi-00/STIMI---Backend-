import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Obligaciones } from './entities/obligaciones.entity';
import { CreateObligacionesDto } from './dto/create-obligaciones.dto';
import { UpdateObligacionesDto } from './dto/update-obligaciones.dto';

@Injectable()
export class ObligacionesService {

  constructor(
    @InjectRepository(Obligaciones)
    private readonly obligacionesRepository: Repository<Obligaciones>,
  ) {}

  async create(createObligacionesDto: CreateObligacionesDto): Promise<Obligaciones> {
    const obligacion = this.obligacionesRepository.create({
      ...createObligacionesDto,
      contrato: { id_contrato: createObligacionesDto.id_contrato },
    });
    return await this.obligacionesRepository.save(obligacion);
  }

  async findAll(): Promise<Obligaciones[]> {
    return await this.obligacionesRepository.find();
  }

  async findOne(id: number): Promise<Obligaciones> {
    const obligacion = await this.obligacionesRepository.findOne({ where: { id_obligacion: id } });
    if (!obligacion) throw new NotFoundException(`Obligación con id ${id} no encontrada`);
    return obligacion;
  }

  async update(id: number, updateObligacionesDto: UpdateObligacionesDto): Promise<Obligaciones> {
    await this.findOne(id);
    await this.obligacionesRepository.update(id, {
      ...updateObligacionesDto,
      ...(updateObligacionesDto.id_contrato && { contrato: { id_contrato: updateObligacionesDto.id_contrato } }),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.obligacionesRepository.delete(id);
    return { message: `Obligación con id ${id} eliminada correctamente` };
  }

}