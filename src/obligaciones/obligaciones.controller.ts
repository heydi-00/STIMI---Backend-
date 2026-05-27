import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ObligacionesService } from './obligaciones.service';
import { CreateObligacionesDto } from './dto/create-obligaciones.dto';
import { UpdateObligacionesDto } from './dto/update-obligaciones.dto';

@Controller('obligaciones')
export class ObligacionesController {

  constructor(private readonly obligacionesService: ObligacionesService) {}

  @Post()
  create(@Body() createObligacionesDto: CreateObligacionesDto) {
    return this.obligacionesService.create(createObligacionesDto);
  }

  @Get()
  findAll() {
    return this.obligacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.obligacionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateObligacionesDto: UpdateObligacionesDto) {
    return this.obligacionesService.update(id, updateObligacionesDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.obligacionesService.remove(id);
  }

}