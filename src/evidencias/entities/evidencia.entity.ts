import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Actividad } from '../../actividad/entities/actividad.entity';

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

}
