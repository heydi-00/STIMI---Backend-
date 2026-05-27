import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { InformeObligacionService } from './informe-obligacion.service';
import { CreateInformeObligacionDto } from './dto/create-informe-obligacion.dto';
import { UpdateInformeObligacionDto } from './dto/update-informe-obligacion.dto';

@Controller('informe-obligacion')
export class InformeObligacionController {

  constructor(private readonly informeObligacionService: InformeObligacionService) {}

  @Post()
  create(@Body() createInformeObligacionDto: CreateInformeObligacionDto) {
    return this.informeObligacionService.create(createInformeObligacionDto);
  }

  @Get()
  findAll() {
    return this.informeObligacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.informeObligacionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateInformeObligacionDto: UpdateInformeObligacionDto) {
    return this.informeObligacionService.update(id, updateInformeObligacionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.informeObligacionService.remove(id);
  }

}