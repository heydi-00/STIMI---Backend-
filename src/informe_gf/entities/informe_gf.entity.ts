import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Informe } from '../../informe/entities/informe.entity';

@Entity('informe_gf')
export class InformeGf {

  @PrimaryGeneratedColumn()
  id_gf: number;

  @Column('varchar', {
    length: 50,
  })
  version_gf: string;

  @ManyToOne(
    () => Informe,
    { eager: true },
  )
  @JoinColumn({ name: 'id_informe' })
  informe: Informe;

}