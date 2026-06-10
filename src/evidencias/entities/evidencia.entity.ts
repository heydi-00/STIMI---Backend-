import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Actividad } from '../../actividad/entities/actividad.entity';
import { Obligaciones } from '../../obligaciones/entities/obligaciones.entity';

@Entity('evidencias')
export class Evidencias {
  @PrimaryGeneratedColumn()
  id_evidencias: number;

  @Column('text')
  descripcion: string;

  @Column('varchar', { length: 500 })
  carpeta_obligacion: string;

  @Column('varchar', { length: 250 })
  fotografia: string;

  @ManyToOne(() => Actividad, { eager: true })
  @JoinColumn({ name: 'id_actividad' })
  actividad: Actividad;

  @ManyToOne(() => Obligaciones, { eager: true, nullable: true })
  @JoinColumn({ name: 'id_obligacion' })
  obligacion?: Obligaciones;
}
