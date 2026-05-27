import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Area } from '../../area/entities/area.entity';
import { Rol } from '../../rol/entities/rol.entity';

@Entity('persona')
export class Persona {

  @PrimaryGeneratedColumn()
  id_persona: number;

  @Column('varchar', { length: 100 })
  nombre: string;

  @Column('varchar', { length: 20 })
  identificacion: string;

  @Column('varchar', { length: 50 })
  correo: string;

  @Column('varchar', { length: 15 })
  telefono: string;

  @ManyToOne(() => Rol, { eager: true })
  @JoinColumn({ name: 'credencial' })
  credencial: Rol;

  @ManyToOne(() => Area, { eager: true })
  @JoinColumn({ name: 'id_area' })
  area: Area;

}