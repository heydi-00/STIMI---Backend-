import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObligacionesService } from './obligaciones.service';
import { ObligacionesController } from './obligaciones.controller';
import { Obligaciones } from './entities/obligaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Obligaciones])],
  controllers: [ObligacionesController],
  providers: [ObligacionesService],
  exports: [TypeOrmModule],
})
export class ObligacionesModule {}