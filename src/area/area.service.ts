import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {

  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
  ) {}

  async create(createAreaDto: CreateAreaDto): Promise<Area> {
    const area = this.areaRepository.create(createAreaDto);
    return await this.areaRepository.save(area);
  }

  async findAll(): Promise<Area[]> {
    return await this.areaRepository.find();
  }

  async findOne(id: number): Promise<Area> {
    const area = await this.areaRepository.findOne({ where: { id_area: id } });
    if (!area) throw new NotFoundException(`Área con id ${id} no encontrada`);
    return area;
  }

  async update(id: number, updateAreaDto: UpdateAreaDto): Promise<Area> {
    await this.findOne(id);
    await this.areaRepository.update(id, updateAreaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.areaRepository.delete(id);
    return { message: `Área con id ${id} eliminada correctamente` };
  }

}