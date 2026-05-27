import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Novedad } from './entities/novedad.entity';
import { CreateNovedadDto } from './dto/create-novedad.dto';
import { UpdateNovedadDto } from './dto/update-novedad.dto';

@Injectable()
export class NovedadService {

  constructor(
    @InjectRepository(Novedad)
    private readonly novedadRepository: Repository<Novedad>,
  ) {}

  async create(createNovedadDto: CreateNovedadDto): Promise<Novedad> {
    const novedad = this.novedadRepository.create({
      ...createNovedadDto,
      version: { id_version: createNovedadDto.id_version },
      persona: { id_persona: createNovedadDto.id_persona },
    });
    return await this.novedadRepository.save(novedad);
  }

  async findAll(): Promise<Novedad[]> {
    return await this.novedadRepository.find();
  }

  async findOne(id: number): Promise<Novedad> {
    const novedad = await this.novedadRepository.findOne({ where: { id_novedad: id } });
    if (!novedad) throw new NotFoundException(`Novedad con id ${id} no encontrada`);
    return novedad;
  }

  async update(id: number, updateNovedadDto: UpdateNovedadDto): Promise<Novedad> {
    await this.findOne(id);
    await this.novedadRepository.update(id, {
      ...updateNovedadDto,
      ...(updateNovedadDto.id_version && { version: { id_version: updateNovedadDto.id_version } }),
      ...(updateNovedadDto.id_persona && { persona: { id_persona: updateNovedadDto.id_persona } }),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.novedadRepository.delete(id);
    return { message: `Novedad con id ${id} eliminada correctamente` };
  }

}