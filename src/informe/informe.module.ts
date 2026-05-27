import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeService } from './informe.service';
import { InformeController } from './informe.controller';
import { Informe } from './entities/informe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Informe])],
  controllers: [InformeController],
  providers: [InformeService],
  exports: [TypeOrmModule],
})
export class InformeModule {}