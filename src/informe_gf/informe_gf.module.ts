import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeGfService } from './informe_gf.service';
import { InformeGfController } from './informe_gf.controller';
import { InformeGf } from './entities/informe_gf.entity';
import { Informe } from '../informe/entities/informe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InformeGf, Informe])],
  controllers: [InformeGfController],
  providers: [InformeGfService],
  exports: [TypeOrmModule],
})
export class InformeGfModule {}
