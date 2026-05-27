import { Module } from '@nestjs/common';
import { InformeGfService } from './informe_gf.service';
import { InformeGfController } from './informe_gf.controller';

@Module({
  controllers: [InformeGfController],
  providers: [InformeGfService],
})
export class InformeGfModule {}
