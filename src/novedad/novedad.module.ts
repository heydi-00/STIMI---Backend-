import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovedadService } from './novedad.service';
import { NovedadController } from './novedad.controller';
import { Novedad } from './entities/novedad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Novedad])],
  controllers: [NovedadController],
  providers: [NovedadService],
  exports: [TypeOrmModule],
})
export class NovedadModule {}