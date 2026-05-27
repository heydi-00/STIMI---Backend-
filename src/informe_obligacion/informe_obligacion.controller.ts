import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InformeObligacionService } from './informe_obligacion.service';
import { CreateInformeObligacionDto } from './dto/create-informe_obligacion.dto';
import { UpdateInformeObligacionDto } from './dto/update-informe_obligacion.dto';

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
  findOne(@Param('id') id: string) {
    return this.informeObligacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInformeObligacionDto: UpdateInformeObligacionDto) {
    return this.informeObligacionService.update(+id, updateInformeObligacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informeObligacionService.remove(+id);
  }
}
