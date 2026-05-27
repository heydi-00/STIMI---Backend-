import { Module } from '@nestjs/common';
import { InformeGcService } from './informe_gc.service';
import { InformeGcController } from './informe_gc.controller';

@Module({
  controllers: [InformeGcController],
  providers: [InformeGcService],
})
export class InformeGcModule {}
