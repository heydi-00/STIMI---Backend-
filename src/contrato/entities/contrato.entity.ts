import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Persona } from '../../persona/entities/persona.entity';

@Entity('contrato')
export class Contrato {

  @PrimaryGeneratedColumn()
  id_contrato: number;

  @Column('date')
  fecha_inicio: Date;

  @Column('date')
  fecha_fin: Date;

  @Column({
    type: 'enum',
    enum: ['Activo', 'Terminado'],
  })
  estado: string;

  @ManyToOne(() => Persona, { eager: true })
  @JoinColumn({ name: 'id_persona' })
  persona: Persona;

}