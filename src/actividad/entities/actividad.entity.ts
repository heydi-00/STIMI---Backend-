import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity()
export class Actividad {
  @PrimaryGeneratedColumn()
  id_actividad: number;

  @Column({ length: 100 })
  competencia: string;

  @Column({ length: 50 })
  ficha: string;

  @Column({ length: 250 })
  resultado: string;

  @Column()
  fecha_inicio: Date;

  @Column()
  fecha_fin: Date;

  @Column()
  estado: string;

  @Column({ nullable: true })
  id_gc: number;

  informe_gc: any;
}