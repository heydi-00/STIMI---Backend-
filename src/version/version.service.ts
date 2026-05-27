import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Version } from './entities/version.entity';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';

@Injectable()
export class VersionService {

  constructor(
    @InjectRepository(Version)
    private readonly versionRepository: Repository<Version>,
  ) {}

  async create(createVersionDto: CreateVersionDto): Promise<Version> {
    const version = this.versionRepository.create({
      ...createVersionDto,
      contrato: { id_contrato: createVersionDto.id_contrato },
    });
    return await this.versionRepository.save(version);
  }

  async findAll(): Promise<Version[]> {
    return await this.versionRepository.find();
  }

  async findOne(id: number): Promise<Version> {
    const version = await this.versionRepository.findOne({ where: { id_version: id } });
    if (!version) throw new NotFoundException(`Version con id ${id} no encontrada`);
    return version;
  }

  async update(id: number, updateVersionDto: UpdateVersionDto): Promise<Version> {
    await this.findOne(id);
    await this.versionRepository.update(id, {
      ...updateVersionDto,
      ...(updateVersionDto.id_contrato && { contrato: { id_contrato: updateVersionDto.id_contrato } }),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.versionRepository.delete(id);
    return { message: `Version con id ${id} eliminada correctamente` };
  }

}