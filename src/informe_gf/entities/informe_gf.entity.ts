import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Informe } from '../../informe/entities/informe.entity';
import { Contrato } from '../../contrato/entities/contrato.entity';

@Entity('informe_gf')
export class InformeGf {
  @PrimaryGeneratedColumn()
  id_gf: number;

  @Column('varchar', {
    length: 50,
  })
  version_gf: string;

  @Column('varchar', { length: 20 })
  numero_pago: string;

  @Column('date')
  periodo_inicial: Date;

  @Column('date')
  periodo_final: Date;

  @Column('decimal', { precision: 15, scale: 2 })
  valor_bruto: number;

  @Column('decimal', { precision: 15, scale: 2 })
  valor_neto: number;

  @Column('varchar', { length: 50, nullable: true })
  numero_planilla_pila: string;

  @Column('varchar', { length: 50, nullable: true })
  numero_compromiso_siif: string;

  @Column('text')
  actividades_desarrolladas: string;

  @Column({
    type: 'enum',
    enum: ['Pendiente', 'Enviado', 'Aprobado', 'Rechazado', 'Pagado'],
    default: 'Pendiente',
  })
  estado: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @Column('text', { nullable: true })
  soportes_adjuntos: string;

  @ManyToOne(() => Informe, { eager: true, nullable: true })
  @JoinColumn({ name: 'id_informe' })
  informe: Informe;

  @ManyToOne(() => Contrato, { eager: true, nullable: true })
  @JoinColumn({ name: 'id_contrato' })
  contrato: Contrato;
}
