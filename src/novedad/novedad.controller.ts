import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NovedadService } from './novedad.service';
import { CreateNovedadDto } from './dto/create-novedad.dto';
import { UpdateNovedadDto } from './dto/update-novedad.dto';

@Controller('novedad')
export class NovedadController {
  constructor(private readonly novedadService: NovedadService) {}

  @Post()
  create(@Body() createNovedadDto: CreateNovedadDto) {
    return this.novedadService.create(createNovedadDto);
  }

  @Get()
  findAll() {
    return this.novedadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novedadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovedadDto: UpdateNovedadDto) {
    return this.novedadService.update(+id, updateNovedadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novedadService.remove(+id);
  }
}
