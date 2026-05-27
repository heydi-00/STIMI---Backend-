import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvidenciasService } from './evidencias.service';
import { EvidenciasController } from './evidencias.controller';
import { Evidencias } from './entities/evidencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evidencias])],
  controllers: [EvidenciasController],
  providers: [EvidenciasService],
  exports: [TypeOrmModule],
})
export class EvidenciasModule {}