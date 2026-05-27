import { Module } from '@nestjs/common';
import { InformeObligacionService } from './informe_obligacion.service';
import { InformeObligacionController } from './informe_obligacion.controller';

@Module({
  controllers: [InformeObligacionController],
  providers: [InformeObligacionService],
})
export class InformeObligacionModule {}
