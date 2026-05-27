import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Contrato } from '../../contrato/entities/contrato.entity';

@Entity('obligaciones')
export class Obligaciones {

  @PrimaryGeneratedColumn()
  id_obligacion: number;

  @Column('text')
  descripcion: string;

  @ManyToOne(() => Contrato, { eager: true })
  @JoinColumn({ name: 'id_contrato' })
  contrato: Contrato;

}