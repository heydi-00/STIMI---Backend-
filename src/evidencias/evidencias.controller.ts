import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EvidenciasService } from './evidencias.service';
import { CreateEvidenciasDto } from './dto/create-evidencias.dto';
import { UpdateEvidenciasDto } from './dto/update-evidencias.dto';

@Controller('evidencias')
export class EvidenciasController {

  constructor(private readonly evidenciasService: EvidenciasService) {}

  @Post()
  create(@Body() createEvidenciasDto: CreateEvidenciasDto) {
    return this.evidenciasService.create(createEvidenciasDto);
  }

  @Get()
  findAll() {
    return this.evidenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.evidenciasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEvidenciasDto: UpdateEvidenciasDto) {
    return this.evidenciasService.update(id, updateEvidenciasDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.evidenciasService.remove(id);
  }

}