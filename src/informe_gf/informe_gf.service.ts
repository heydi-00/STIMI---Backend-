import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InformeGf } from './entities/informe_gf.entity';
import { CreateInformeGfDto } from './dto/create-informe_gf.dto';
import { UpdateInformeGfDto } from './dto/update-informe_gf.dto';

@Injectable()
export class InformeGfService {

  constructor(
    @InjectRepository(InformeGf)
    private readonly informeGfRepository: Repository<InformeGf>,
  ) {}

  async create(createInformeGfDto: CreateInformeGfDto): Promise<InformeGf> {
    const informeGf = this.informeGfRepository.create({
      ...createInformeGfDto,
      informe: { id_informe: createInformeGfDto.id_informe },
    });
    return await this.informeGfRepository.save(informeGf);
  }

  async findAll(): Promise<InformeGf[]> {
    return await this.informeGfRepository.find();
  }

  async findOne(id: number): Promise<InformeGf> {
    const informeGf = await this.informeGfRepository.findOne({ where: { id_gf: id } });
    if (!informeGf) throw new NotFoundException(`InformeGf con id ${id} no encontrado`);
    return informeGf;
  }

  async update(id: number, updateInformeGfDto: UpdateInformeGfDto): Promise<InformeGf> {
    await this.findOne(id);
    await this.informeGfRepository.update(id, {
      ...updateInformeGfDto,
      ...(updateInformeGfDto.id_informe && { informe: { id_informe: updateInformeGfDto.id_informe } }),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.informeGfRepository.delete(id);
    return { message: `InformeGf con id ${id} eliminado correctamente` };
  }

}