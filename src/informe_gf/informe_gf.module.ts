import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeGfService } from './informe_gf.service';
import { InformeGfController } from './informe_gf.controller';
import { InformeGf } from './entities/informe_gf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InformeGf])],
  controllers: [InformeGfController],
  providers: [InformeGfService],
  exports: [TypeOrmModule],
})
export class InformeGfModule {}