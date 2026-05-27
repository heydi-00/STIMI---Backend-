import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaModule } from './area/area.module';
import { RolModule } from './rol/rol.module';
import { PersonaModule } from './persona/persona.module';
import { ContratoModule } from './contrato/contrato.module';
/* import { ObligacionesModule } from './obligaciones/obligaciones.module'; */
import { VersionModule } from './version/version.module';
import { InformeModule } from './informe/informe.module';
/* import { InformeGcModule } from './informe-gc/informe-gc.module'; */
/* import { InformeGfModule } from './informe-gf/informe-gf.module'; */
import { ActividadModule } from './actividad/actividad.module';
import { EvidenciasModule } from './evidencias/evidencias.module';
import { NovedadModule } from './novedad/novedad.module';
import { InformeObligacionModule } from './informe_obligacion/informe-obligacion.module';

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
    /* ObligacionesModule, */
    VersionModule,
    InformeModule,
    /* InformeGcModule, */
    /* InformeGfModule, */
    ActividadModule,
    EvidenciasModule,
    NovedadModule,
    InformeObligacionModule,
  ],
})
export class AppModule {}