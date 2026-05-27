import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Version } from '../../version/entities/version.entity';
import { Persona } from '../../persona/entities/persona.entity';

@Entity('novedad')
export class Novedad {

  @PrimaryGeneratedColumn()
  id_novedad: number;

  @Column('text')
  descripcion: string;

  @ManyToOne(() => Version, { eager: true })
  @JoinColumn({ name: 'id_version' })
  version: Version;

  @ManyToOne(() => Persona, { eager: true })
  @JoinColumn({ name: 'id_persona' })
  persona: Persona;

}