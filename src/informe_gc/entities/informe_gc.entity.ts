import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Informe } from '../../informe/entities/informe.entity';

@Entity('informe_gc')
export class InformeGc {

  @PrimaryGeneratedColumn()
  id_gc: number;

  @Column('varchar', {
    length: 50,
  })
  version_gc: string;

  @ManyToOne(
    () => Informe,
    { eager: true },
  )
  @JoinColumn({ name: 'id_informe' })
  informe: Informe;

}