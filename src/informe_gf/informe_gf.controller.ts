import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { InformeGfService } from './informe_gf.service';
import { CreateInformeGfDto } from './dto/create-informe_gf.dto';
import { UpdateInformeGfDto } from './dto/update-informe_gf.dto';

@Controller('informes-gf')
export class InformeGfController {
  constructor(private readonly informeGfService: InformeGfService) {}

  @Post()
  create(@Body() createInformeGfDto: CreateInformeGfDto) {
    return this.informeGfService.create(createInformeGfDto);
  }

  @Get()
  findAll() {
    return this.informeGfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.informeGfService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInformeGfDto: UpdateInformeGfDto,
  ) {
    return this.informeGfService.update(id, updateInformeGfDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.informeGfService.remove(id);
  }
}
