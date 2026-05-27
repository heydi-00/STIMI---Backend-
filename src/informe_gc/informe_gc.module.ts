import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeGcService } from './informe_gc.service';
import { InformeGcController } from './informe_gc.controller';
import { InformeGc } from './entities/informe_gc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InformeGc])],
  controllers: [InformeGcController],
  providers: [InformeGcService],
  exports: [TypeOrmModule],
})
export class InformeGcModule {}