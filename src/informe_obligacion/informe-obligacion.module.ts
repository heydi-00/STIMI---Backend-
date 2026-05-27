import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeObligacionService } from './informe-obligacion.service';
import { InformeObligacionController } from './informe-obligacion.controller';
import { InformeObligacion } from './entities/informe-obligacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InformeObligacion])],
  controllers: [InformeObligacionController],
  providers: [InformeObligacionService],
  exports: [TypeOrmModule],
})
export class InformeObligacionModule {}