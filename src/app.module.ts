import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaModule } from './area/area.module';
import { RolModule } from './rol/rol.module';
import { PersonaModule } from './persona/persona.module';
import { ContratoModule } from './contrato/contrato.module';
import { ObligacionesModule } from './obligaciones/obligaciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'stimi',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AreaModule,
    RolModule,
    PersonaModule,
    ContratoModule,
    ObligacionesModule,
  ],
})
export class AppModule {}