import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('area')
export class Area {

  @PrimaryGeneratedColumn()
  id_area: number;

  @Column('varchar', { length: 50 })
  nombre: string;

}
