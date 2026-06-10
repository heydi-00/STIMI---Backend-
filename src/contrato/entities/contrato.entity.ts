import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Persona } from '../../persona/entities/persona.entity';

@Entity('contrato')
export class Contrato {
  @PrimaryGeneratedColumn()
  id_contrato: number;

  @Column('date')
  fecha_inicio: Date;

  @Column('date', { nullable: true })
  fecha_fin: Date;

  @Column('varchar', { length: 50, nullable: true })
  numero_contrato: string;

  @Column({
    type: 'enum',
    enum: ['Agricola', 'Regular', 'Temporal'],
  })
  tipo_contrato: string;

  @Column('varchar', { length: 50, nullable: true })
  numero_sif: string;

  @Column('varchar', { length: 50, nullable: true })
  numero_planilla_social: string;

  @Column({
    type: 'enum',
    enum: ['Activo', 'Terminado'],
  })
  estado: string;

  @ManyToOne(() => Persona, { eager: true })
  @JoinColumn({ name: 'id_persona' })
  persona: Persona;
}
