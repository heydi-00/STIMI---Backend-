import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Version } from '../../version/entities/version.entity';

@Entity('informe')
export class Informe {

  @PrimaryGeneratedColumn()
  id_informe: number;

  @Column('varchar', {
    length: 100,
  })
  tipologia: string;

  @ManyToOne(
    () => Version,
    { eager: true },
  )
  @JoinColumn({ name: 'id_version' })
  version: Version;

}