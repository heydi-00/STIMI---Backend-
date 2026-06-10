import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contrato } from '../contrato/entities/contrato.entity';
import { Obligaciones } from './entities/obligaciones.entity';
import { CreateObligacionesDto } from './dto/create-obligaciones.dto';
import { UpdateObligacionesDto } from './dto/update-obligaciones.dto';

@Injectable()
export class ObligacionesService {
  constructor(
    @InjectRepository(Obligaciones)
    private readonly obligacionesRepository: Repository<Obligaciones>,
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
  ) {}

  private async getDefaultTipoDependencia(id_contrato: number) {
    const contrato = await this.contratoRepository.findOne({
      where: { id_contrato },
    });
    if (!contrato)
      throw new NotFoundException(
        `Contrato con id ${id_contrato} no encontrado para establecer tipo_dependencia`,
      );
    return contrato.tipo_contrato;
  }

  async create(
    createObligacionesDto: CreateObligacionesDto,
  ): Promise<Obligaciones> {
    const tipo_dependencia =
      createObligacionesDto.tipo_dependencia ||
      (await this.getDefaultTipoDependencia(createObligacionesDto.id_contrato));

    const obligacion = this.obligacionesRepository.create({
      ...createObligacionesDto,
      tipo_dependencia,
      contrato: { id_contrato: createObligacionesDto.id_contrato },
    });
    return await this.obligacionesRepository.save(obligacion);
  }

  async findAll(): Promise<Obligaciones[]> {
    return await this.obligacionesRepository.find();
  }

  async findOne(id: number): Promise<Obligaciones> {
    const obligacion = await this.obligacionesRepository.findOne({
      where: { id_obligacion: id },
    });
    if (!obligacion)
      throw new NotFoundException(`Obligación con id ${id} no encontrada`);
    return obligacion;
  }

  async update(
    id: number,
    updateObligacionesDto: UpdateObligacionesDto,
  ): Promise<Obligaciones> {
    await this.findOne(id);
    const updateData: any = {
      ...updateObligacionesDto,
    };

    if (updateObligacionesDto.id_contrato) {
      updateData.contrato = { id_contrato: updateObligacionesDto.id_contrato };
      if (!updateObligacionesDto.tipo_dependencia) {
        updateData.tipo_dependencia = await this.getDefaultTipoDependencia(
          updateObligacionesDto.id_contrato,
        );
      }
    }

    await this.obligacionesRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.obligacionesRepository.delete(id);
    return { message: `Obligación con id ${id} eliminada correctamente` };
  }
}
