import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Informe } from '../informe/entities/informe.entity';
import { InformeGf } from './entities/informe_gf.entity';
import { CreateInformeGfDto } from './dto/create-informe_gf.dto';
import { UpdateInformeGfDto } from './dto/update-informe_gf.dto';

@Injectable()
export class InformeGfService {
  constructor(
    @InjectRepository(InformeGf)
    private readonly informeGfRepository: Repository<InformeGf>,
    @InjectRepository(Informe)
    private readonly informeRepository: Repository<Informe>,
  ) {}

  private async getInforme(
    id_informe?: number,
    id_version?: number,
  ): Promise<Informe> {
    if (id_informe) {
      const informe = await this.informeRepository.findOne({
        where: { id_informe },
      });
      if (!informe)
        throw new NotFoundException(
          `Informe con id ${id_informe} no encontrado`,
        );
      return informe;
    }

    if (id_version) {
      const informe = this.informeRepository.create({
        tipologia: 'GF',
        version: { id_version },
      });
      return await this.informeRepository.save(informe);
    }

    throw new BadRequestException(
      'Se requiere id_informe o id_version para crear el informe GF',
    );
  }

  async create(createInformeGfDto: CreateInformeGfDto): Promise<InformeGf> {
    const informe = await this.getInforme(
      createInformeGfDto.id_informe,
      createInformeGfDto.id_version,
    );

    const informeGf = this.informeGfRepository.create({
      version_gf: createInformeGfDto.version_gf,
      numero_pago: createInformeGfDto.numero_pago,
      periodo_inicial: createInformeGfDto.periodo_inicial,
      periodo_final: createInformeGfDto.periodo_final,
      valor_bruto: createInformeGfDto.valor_bruto,
      valor_neto: createInformeGfDto.valor_neto,
      numero_planilla_pila: createInformeGfDto.numero_planilla_pila,
      numero_compromiso_siif: createInformeGfDto.numero_compromiso_siif,
      actividades_desarrolladas: createInformeGfDto.actividades_desarrolladas,
      estado: createInformeGfDto.estado ?? 'Pendiente',
      soportes_adjuntos: createInformeGfDto.soportes_adjuntos,
      informe: { id_informe: informe.id_informe },
      ...(createInformeGfDto.id_contrato && {
        contrato: { id_contrato: createInformeGfDto.id_contrato },
      }),
    });
    return await this.informeGfRepository.save(informeGf);
  }

  async findAll(): Promise<InformeGf[]> {
    return await this.informeGfRepository.find();
  }

  async findOne(id: number): Promise<InformeGf> {
    const informeGf = await this.informeGfRepository.findOne({
      where: { id_gf: id },
    });
    if (!informeGf)
      throw new NotFoundException(`InformeGf con id ${id} no encontrado`);
    return informeGf;
  }

  async update(
    id: number,
    updateInformeGfDto: UpdateInformeGfDto,
  ): Promise<InformeGf> {
    await this.findOne(id);

    const updatePayload: any = {
      ...updateInformeGfDto,
      ...(updateInformeGfDto.id_informe && {
        informe: { id_informe: updateInformeGfDto.id_informe },
      }),
      ...(updateInformeGfDto.id_contrato && {
        contrato: { id_contrato: updateInformeGfDto.id_contrato },
      }),
    };

    await this.informeGfRepository.update(id, updatePayload);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.informeGfRepository.delete(id);
    return { message: `InformeGf con id ${id} eliminado correctamente` };
  }
}
