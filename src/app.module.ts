import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AreaModule } from './area/area.module';
import { RolModule } from './rol/rol.module';
import { PersonaModule } from './persona/persona.module';
import { ContratoModule } from './contrato/contrato.module';
import { ObligacionesModule } from './obligaciones/obligaciones.module';
import { VersionModule } from './version/version.module';
import { InformeModule } from './informe/informe.module';
import { InformeGcModule } from './informe_gc/informe_gc.module';
import { InformeGfModule } from './informe_gf/informe_gf.module';
import { ActividadModule } from './actividad/actividad.module';
import { EvidenciasModule } from './evidencias/evidencias.module';
import { NovedadModule } from './novedad/novedad.module';
import { InformeObligacionModule } from './informe_obligacion/informe-obligacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    AreaModule,
    RolModule,
    PersonaModule,
    ContratoModule,
    ObligacionesModule,
    VersionModule,
    InformeModule,
    InformeGcModule,
    InformeGfModule,
    ActividadModule,
    EvidenciasModule,
    NovedadModule,
    InformeObligacionModule,
  ],
})
export class AppModule {}