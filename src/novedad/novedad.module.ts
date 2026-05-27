import { Module } from '@nestjs/common';
import { NovedadService } from './novedad.service';
import { NovedadController } from './novedad.controller';

@Module({
  controllers: [NovedadController],
  providers: [NovedadService],
})
export class NovedadModule {}
