import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class Rol {

  @PrimaryGeneratedColumn()
  credencial: number;

  @Column({
    type: 'enum',
    enum: ['Activo', 'Inactivo'],
  })
  estado: string;

}