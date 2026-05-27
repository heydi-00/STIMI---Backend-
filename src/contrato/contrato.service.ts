import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contrato } from './entities/contrato.entity';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';

@Injectable()
export class ContratoService {

  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
  ) {}

  async create(createContratoDto: CreateContratoDto): Promise<Contrato> {
    const contrato = this.contratoRepository.create({
      ...createContratoDto,
      persona: { id_persona: createContratoDto.id_persona },
    });
    return await this.contratoRepository.save(contrato);
  }

  async findAll(): Promise<Contrato[]> {
    return await this.contratoRepository.find();
  }

  async findOne(id: number): Promise<Contrato> {
    const contrato = await this.contratoRepository.findOne({ where: { id_contrato: id } });
    if (!contrato) throw new NotFoundException(`Contrato con id ${id} no encontrado`);
    return contrato;
  }

  async update(id: number, updateContratoDto: UpdateContratoDto): Promise<Contrato> {
    await this.findOne(id);
    await this.contratoRepository.update(id, {
      ...updateContratoDto,
      ...(updateContratoDto.id_persona && { persona: { id_persona: updateContratoDto.id_persona } }),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.contratoRepository.delete(id);
    return { message: `Contrato con id ${id} eliminado correctamente` };
  }

}