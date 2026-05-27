import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evidencias } from './entities/evidencia.entity';
import { CreateEvidenciasDto } from './dto/create-evidencias.dto';
import { UpdateEvidenciasDto } from './dto/update-evidencias.dto';

@Injectable()
export class EvidenciasService {

  constructor(
    @InjectRepository(Evidencias)
    private readonly evidenciasRepository: Repository<Evidencias>,
  ) {}

  async create(createEvidenciasDto: CreateEvidenciasDto): Promise<Evidencias> {
    const evidencia = this.evidenciasRepository.create({
      ...createEvidenciasDto,
      actividad: { id_actividad: createEvidenciasDto.id_actividad },
    });
    return await this.evidenciasRepository.save(evidencia);
  }

  async findAll(): Promise<Evidencias[]> {
    return await this.evidenciasRepository.find();
  }

  async findOne(id: number): Promise<Evidencias> {
    const evidencia = await this.evidenciasRepository.findOne({ where: { id_evidencias: id } });
    if (!evidencia) throw new NotFoundException(`Evidencia con id ${id} no encontrada`);
    return evidencia;
  }

  async update(id: number, updateEvidenciasDto: UpdateEvidenciasDto): Promise<Evidencias> {
    await this.findOne(id);
    await this.evidenciasRepository.update(id, {
      ...updateEvidenciasDto,
      ...(updateEvidenciasDto.id_actividad && { actividad: { id_actividad: updateEvidenciasDto.id_actividad } }),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.evidenciasRepository.delete(id);
    return { message: `Evidencia con id ${id} eliminada correctamente` };
  }

}