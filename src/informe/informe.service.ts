import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Informe } from './entities/informe.entity';
import { CreateInformeDto } from './dto/create-informe.dto';
import { UpdateInformeDto } from './dto/update-informe.dto';

@Injectable()
export class InformeService {

  constructor(
    @InjectRepository(Informe)
    private readonly informeRepository: Repository<Informe>,
  ) {}

  async create(createInformeDto: CreateInformeDto): Promise<Informe> {
    const informe = this.informeRepository.create({
      ...createInformeDto,
      version: { id_version: createInformeDto.id_version },
    });
    return await this.informeRepository.save(informe);
  }

  async findAll(): Promise<Informe[]> {
    return await this.informeRepository.find();
  }

  async findOne(id: number): Promise<Informe> {
    const informe = await this.informeRepository.findOne({ where: { id_informe: id } });
    if (!informe) throw new NotFoundException(`Informe con id ${id} no encontrado`);
    return informe;
  }

  async update(id: number, updateInformeDto: UpdateInformeDto): Promise<Informe> {
    await this.findOne(id);
    await this.informeRepository.update(id, {
      ...updateInformeDto,
      ...(updateInformeDto.id_version && { version: { id_version: updateInformeDto.id_version } }),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.informeRepository.delete(id);
    return { message: `Informe con id ${id} eliminado correctamente` };
  }

}